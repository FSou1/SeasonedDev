const { parentPort, workerData } = require("worker_threads");

const { getFibonacciNumber } = require("./fibonachi.js");

parentPort.postMessage(getFibonacciNumber(workerData.num))