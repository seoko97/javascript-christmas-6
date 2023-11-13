import { EVENT_DATE } from '../constants/event.js';
import DateValidate from '../utils/validate/DateValidate.js';

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
    DateValidate.isNotValidDate(day);
  }
}

export default EventDate;
