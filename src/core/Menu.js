import { MENU } from '../constants/menu.js';
import OrderValidate from '../utils/validate/OrderValidate.js';

class Menu {
  #detail;

  #count;

  constructor(newMenu) {
    this.#validate(newMenu);
    this.#detail = MENU.find((menu) => menu.name === newMenu.name);
    this.#count = newMenu.count;
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

  #validate(menu) {
    OrderValidate.isLessThanMinMenuCount(menu.count);
    OrderValidate.isNotValidMenuName(menu.name);
  }
}

export default Menu;
