import type * as d from '../../declarations';

export const initNodeWorkerThread = (prcs: NodeJS.Process, msgHandler: d.WorkerMsgHandler) => {
  const sendHandle = (err: NodeJS.ErrnoException) => {
    if (err && err.code === 'ERR_IPC_CHANNEL_CLOSED') {
      prcs.exit(0);
    }
  };

  const errorHandler = (rindoMsgId: number, err: any) => {
    const errMsgBackToMain: d.MsgFromWorker = {
      rindoId: rindoMsgId,
      rindoRtnValue: null,
      rindoRtnError: 'Error',
    };
    if (typeof err === 'string') {
      errMsgBackToMain.rindoRtnError += ': ' + err;
    } else if (err) {
      if (err.stack) {
        errMsgBackToMain.rindoRtnError += ': ' + err.stack;
      } else if (err.message) {
        errMsgBackToMain.rindoRtnError += ':' + err.message;
      }
    }
    prcs.send(errMsgBackToMain, sendHandle);
  };

  prcs.on('message', async (msgToWorker: d.MsgToWorker) => {
    // message from the main thread
    if (msgToWorker && typeof msgToWorker.rindoId === 'number') {
      try {
        // run the handler to get the data
        const msgFromWorker: d.MsgFromWorker = {
          rindoId: msgToWorker.rindoId,
          rindoRtnValue: await msgHandler(msgToWorker),
          rindoRtnError: null,
        };

        // send response data from the worker to the main thread
        prcs.send(msgFromWorker, sendHandle);
      } catch (e) {
        // error occurred while running the task
        errorHandler(msgToWorker.rindoId, e);
      }
    }
  });

  prcs.on(`unhandledRejection`, (e: any) => {
    errorHandler(-1, e);
  });
};
