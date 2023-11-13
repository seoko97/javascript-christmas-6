import { ERROR } from '../../constants/error.js';
import { EVENT_DATE } from '../../constants/event.js';
import { MIN_MENU_COUNT } from '../../constants/menu.js';
import { REGEX } from '../../constants/regex.js';
import { throwError } from '../index.js';

class InputValidate {
  static isNotNumberDate(date) {
    throwError(ERROR.invalid_date, date === '' || Number.isNaN(Number(date)));
  }

  static isNotValidDate(date) {
    throwError(
      ERROR.invalid_date,
      date < EVENT_DATE.min_date || date > EVENT_DATE.max_date,
    );
  }

  static isNotValidMenu(input) {
    const orders = input.split(REGEX.comma);

    const isNotValid = orders.some((menu) => {
      const [menuName, menuCount] = menu.split(REGEX.dash);

      return (
        !menuName ||
        menuCount === '' ||
        Number.isNaN(Number(menuCount)) ||
        Number(menuCount) < MIN_MENU_COUNT
      );
    });

    throwError(ERROR.invalid_order, isNotValid);
  }
}

export default InputValidate;
