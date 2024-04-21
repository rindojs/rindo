import ts from 'typescript';

import { RINDO_DECORATORS, RindoDecorator } from './decorators-constants';

export class ImportAliasMap extends Map<RindoDecorator, string> {
  constructor(sourceFile: ts.SourceFile) {
    super();
    this.generateImportAliasMap(sourceFile);
  }

  /**
   * Parses a {@link ts.SourceFile} and generates a map of all imported Rindo decorators
   * to their aliases import name (if one exists).
   *
   * @param sourceFile The source file to parse
   */
  private generateImportAliasMap(sourceFile: ts.SourceFile) {
    const importDeclarations = sourceFile.statements.filter(ts.isImportDeclaration);

    for (const importDeclaration of importDeclarations) {
      if (importDeclaration.moduleSpecifier.getText().includes('@rindo/core')) {
        const namedBindings = importDeclaration.importClause?.namedBindings;

        if (namedBindings && ts.isNamedImports(namedBindings)) {
          for (const element of namedBindings.elements) {
            const importName = element.name.getText();
            const originalImportName = element.propertyName?.getText() ?? importName;

            // We only care to generate a map for the Rindo decorators
            if (RINDO_DECORATORS.includes(originalImportName as RindoDecorator)) {
              this.set(originalImportName as RindoDecorator, importName);
            }
          }
        }
      }
    }
  }

  override get(key: RindoDecorator): string {
    return super.get(key) ?? key;
  }
}
