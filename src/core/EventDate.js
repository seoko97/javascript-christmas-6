import { EVENT_DATE } from '../constants/event.js';
import InputValidate from '../utils/validate/InputValidate.js';

class EventDate {
  #date;

  constructor(day) {
    this.#validate(day);
    this.#date = new Date(EVENT_DATE.year, EVENT_DATE.month, day);
  }

  getDay() {
    return this.#date.getDate();
  }

  getDayOfWeek() {
    return this.#date.getDay();
  }

  getDate() {
    return this.#date;
  }

  #validate(day) {
    InputValidate.isNotValidDate(day);
  }
}

export default EventDate;
