const { Worker } = require("worker_threads");

exports.getFibonacciNumber = (number) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", { workerData: { num: number } });

    worker.once("message", result => {
      resolve(result);
    });

    worker.on("error", error => {
      console.log(error);
      reject(error);
    });
  });
}
