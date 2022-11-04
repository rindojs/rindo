import { isNumber, isString } from '@utils';
import { MsgFromWorker, MsgToWorker, WorkerMsgHandler } from '../../../declarations';

export const initWebWorkerThread = (msgHandler: WorkerMsgHandler) => {
  let isQueued = false;

  const tick = Promise.resolve();

  const msgsFromWorkerQueue: MsgFromWorker[] = [];

  const drainMsgQueueFromWorkerToMain = () => {
    isQueued = false;
    (self as any).postMessage(msgsFromWorkerQueue);
    msgsFromWorkerQueue.length = 0;
  };

  const queueMsgFromWorkerToMain = (msgFromWorkerToMain: MsgFromWorker) => {
    msgsFromWorkerQueue.push(msgFromWorkerToMain);
    if (!isQueued) {
      isQueued = true;
      tick.then(drainMsgQueueFromWorkerToMain);
    }
  };

  const error = (rindoMsgId: number, err: any) => {
    const errMsgFromWorkerToMain: MsgFromWorker = {
      rindoId: rindoMsgId,
      rindoRtnValue: null,
      rindoRtnError: 'Error',
    };
    if (isString(err)) {
      errMsgFromWorkerToMain.rindoRtnError += ': ' + err;
    } else if (err) {
      if (err.stack) {
        errMsgFromWorkerToMain.rindoRtnError += ': ' + err.stack;
      } else if (err.message) {
        errMsgFromWorkerToMain.rindoRtnError += ': ' + err.message;
      }
    }
    queueMsgFromWorkerToMain(errMsgFromWorkerToMain);
  };

  const receiveMsgFromMainToWorker = async (msgToWorker: MsgToWorker) => {
    if (msgToWorker && isNumber(msgToWorker.rindoId)) {
      try {
        // run the handler to get the data
        const msgFromWorkerToMain: MsgFromWorker = {
          rindoId: msgToWorker.rindoId,
          rindoRtnValue: await msgHandler(msgToWorker),
          rindoRtnError: null,
        };
        queueMsgFromWorkerToMain(msgFromWorkerToMain);
      } catch (e) {
        // error occurred while running the task
        error(msgToWorker.rindoId, e);
      }
    }
  };

  self.onmessage = (ev: MessageEvent) => {
    // message from the main thread
    const msgsFromMainToWorker: MsgToWorker[] = ev.data;
    if (Array.isArray(msgsFromMainToWorker)) {
      for (const msgFromMainToWorker of msgsFromMainToWorker) {
        receiveMsgFromMainToWorker(msgFromMainToWorker);
      }
    }
  };

  self.onerror = e => {
    // uncaught error occurred on the worker thread
    error(-1, e);
  };
};
