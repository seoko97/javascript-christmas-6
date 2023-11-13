import { ERROR } from '../constants/error.js';

class CustomError extends Error {
  constructor(message) {
    super(`\n${ERROR.prefix} ${message} ${ERROR.suffix}\n`);
    this.name = 'CustomError';
  }
}

export default CustomError;
