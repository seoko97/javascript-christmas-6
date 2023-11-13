import { ERROR } from '../../constants/error.js';
import { EVENT_DATE } from '../../constants/event.js';
import { throwError } from '../index.js';

class DateValidate {
  static isNotRange(date) {
    throwError(
      ERROR.invalid_date,
      date < EVENT_DATE.min_date || date > EVENT_DATE.max_date,
    );
  }
}

export default DateValidate;
