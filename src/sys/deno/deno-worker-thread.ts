import type { MsgFromWorker, MsgToWorker, WorkerMsgHandler } from '../../declarations';

export const initDenoWorkerThread = (glbl: any, msgHandler: WorkerMsgHandler) => {
  let isQueued = false;

  const msgsFromWorkerQueue: MsgFromWorker[] = [];

  const drainMsgQueueFromWorkerToMain = () => {
    isQueued = false;
    glbl.postMessage(msgsFromWorkerQueue);
    msgsFromWorkerQueue.length = 0;
  };

  const queueMsgFromWorkerToMain = (msgFromWorkerToMain: MsgFromWorker) => {
    msgsFromWorkerQueue.push(msgFromWorkerToMain);
    if (!isQueued) {
      isQueued = true;
      queueMicrotask(drainMsgQueueFromWorkerToMain);
    }
  };

  const error = (rindoMsgId: number, err: any) => {
    const errMsgFromWorkerToMain: MsgFromWorker = {
      rindoId: rindoMsgId,
      rindoRtnValue: null,
      rindoRtnError: 'Error',
    };
    if (typeof err === 'string') {
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
    if (msgToWorker && typeof msgToWorker.rindoId === 'number') {
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

  glbl.onmessage = (ev: MessageEvent) => {
    // message from the main thread
    const msgsFromMainToWorker: MsgToWorker[] = ev.data;
    if (Array.isArray(msgsFromMainToWorker)) {
      for (const msgFromMainToWorker of msgsFromMainToWorker) {
        receiveMsgFromMainToWorker(msgFromMainToWorker);
      }
    }
  };

  glbl.onerror = (e: any) => {
    // uncaught error occurred on the worker thread
    error(-1, e);
  };
};
