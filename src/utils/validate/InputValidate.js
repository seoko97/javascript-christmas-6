import { ERROR } from '../../constants/error.js';
import { REGEX } from '../../constants/regex.js';
import { throwError } from '../index.js';

class InputValidate {
  static isNotNumberDate(date) {
    throwError(ERROR.invalid_date, date === '' || Number.isNaN(Number(date)));
  }

  static isNotValidMenu(input) {
    const orders = input.split(REGEX.comma);

    const isNotValid = orders.some((menu) => {
      const [menuName, menuCount] = menu.split(REGEX.dash);

      return !menuName || menuCount === '' || Number.isNaN(Number(menuCount));
    });

    throwError(ERROR.invalid_order, isNotValid);
  }
}

export default InputValidate;
