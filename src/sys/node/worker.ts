import '@rindo/core/compiler';
import * as nodeApi from '@sys-api-node';
import { initNodeWorkerThread } from './node-worker-thread';

const coreCompiler = (global as any).rindo as typeof import('@rindo/core/compiler');
const nodeSys = nodeApi.createNodeSys({ process: process });
const msgHandler = coreCompiler.createWorkerMessageHandler(nodeSys);

initNodeWorkerThread(process, msgHandler);
