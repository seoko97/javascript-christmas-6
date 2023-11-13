import { MENU } from '../constants/menu.js';
import OrderValidate from '../utils/validate/OrderValidate.js';

class Menu {
  #detail;

  #count;

  constructor({ name, count }) {
    this.#validate(name);
    this.#detail = MENU.find((menu) => menu.name === name);
    this.#count = count;
  }

  getInfo() {
    return {
      name: this.#detail.name,
      price: this.#detail.price,
      count: this.#count,
    };
  }

  getName() {
    return this.#detail.name;
  }

  getCount() {
    return this.#count;
  }

  getTotalPrice() {
    return this.#detail.price * this.#count;
  }

  compareCourseName(courseName) {
    return this.#detail.course === courseName;
  }

  #validate(name) {
    OrderValidate.isNotValidMenuName(name);
  }
}

export default Menu;
