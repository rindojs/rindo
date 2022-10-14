import { CLASS_DECORATORS_TO_REMOVE, MEMBER_DECORATORS_TO_REMOVE } from './decorators-to-static/decorator-utils';
import { removeDecorators } from './transform-utils';
import ts from 'typescript';
import { updateRindoCoreImport } from './update-rindo-core-import';


export const removeRindoDecorators = (): ts.TransformerFactory<ts.SourceFile> => {

  return transformCtx => {

    const visit = (node: ts.Node): ts.VisitResult<ts.Node> => {
      if (ts.isClassDeclaration(node)) {
        return visitComponentClass(node);
      }
      return ts.visitEachChild(node, visit, transformCtx);
    };
    return (tsSourceFile) => visit(tsSourceFile) as ts.SourceFile;
  };
};


const visitComponentClass = (classNode: ts.ClassDeclaration): ts.ClassDeclaration => {
  removeDecorators(classNode, CLASS_DECORATORS_TO_REMOVE);

  classNode.members.forEach((member) => {
    if (Array.isArray(member.decorators)) {
      removeDecorators(member, MEMBER_DECORATORS_TO_REMOVE);
    }
  });

  return classNode;
};


export const removeRindoImports = (): ts.TransformerFactory<ts.SourceFile> => {

  return transformCtx => {

    return tsSourceFile => {
      const visitNode = (node: ts.Node): any => {
        if (node.kind === ts.SyntaxKind.ImportDeclaration) {
          return updateRindoCoreImport(node as ts.ImportDeclaration, '@rindo/core');
        }

        return ts.visitEachChild(node, visitNode, transformCtx);
      };

      return ts.visitEachChild(tsSourceFile, visitNode, transformCtx);
    };
  };
};
