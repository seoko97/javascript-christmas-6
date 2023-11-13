import { throwError } from '../index.js';
import { ERROR } from '../../constants/error.js';
import {
  DRINK_MENU,
  MAX_MENU_COUNT,
  MENU,
  MIN_MENU_COUNT,
} from '../../constants/menu.js';

class OrderValidate {
  static isNotValidMenuName(menuName) {
    const isValid = MENU.some((menu) => menu.name === menuName);

    throwError(ERROR.invalid_order, !isValid);
  }

  static isLessThanMinMenuCount(count) {
    throwError(ERROR.invalid_order, count < MIN_MENU_COUNT);
  }

  static isExceedMaxMenuCount(orders) {
    const menuCount = orders.reduce((acc, cur) => acc + cur.count, 0);

    throwError(ERROR.exceed_menu, menuCount > MAX_MENU_COUNT);
  }

  static isDuplicatedMenu(orders) {
    const menuNames = orders.map((order) => order.name);

    const isDuplicated = menuNames.some(
      (menuName, idx) => menuNames.indexOf(menuName) !== idx,
    );

    throwError(ERROR.invalid_order, isDuplicated);
  }

  static isOnlyOrderedDrink(order) {
    const allDrinkName = DRINK_MENU.map((menu) => menu.name);

    const isOnlyOrderedDrink = order.every((menu) =>
      allDrinkName.includes(menu.name),
    );

    throwError(ERROR.only_ordered_drink, isOnlyOrderedDrink);
  }
}

export default OrderValidate;
