import { Console } from '@woowacourse/mission-utils';

import CustomError from '../core/CustomError.js';

function printMessage(message) {
  return Console.print(message);
}

async function readLineAsync(message) {
  return (await Console.readLineAsync(message)).trim();
}

function throwError(message, condition = true) {
  if (!condition) {
    return;
  }

  throw new CustomError(message);
}

async function retryWithValidation(fn) {
  let isValid = false;

  while (!isValid) {
    try {
      await fn();

      isValid = true;
    } catch (e) {
      printMessage(e.message);
    }
  }
}

export { printMessage, readLineAsync, throwError, retryWithValidation };
