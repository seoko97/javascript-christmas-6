import Menu from '../../core/Menu.js';
import OrderValidate from '../../utils/validate/OrderValidate.js';

import { GIFT_MENU_NAME } from '../../constants/menu.js';
import {
  DISCOUNT_AMOUNT,
  EVENT_BADGE,
  EVENT_COURSE,
  EVENT_DATE,
  EVENT_MIN_PRICE,
  EVENT_NAME,
} from '../../constants/event.js';
import EventDate from '../../core/EventDate.js';

class EventModel {
  #date;

  #order = [];

  setOrder(order) {
    this.#order = order.map((menu) => new Menu(menu));
    this.#validateOrder(order);
  }

  setDate(date) {
    this.#date = new EventDate(date);
  }

  getOrder() {
    return this.#order.map((menu) => menu.getInfo());
  }

  getTotalPrice() {
    return this.#order.reduce((total, menu) => total + menu.getTotalPrice(), 0);
  }

  getGiveaway() {
    const isEnough = this.#isMoreThanMinPrice(EVENT_NAME.giveaway);

    if (!isEnough) {
      return null;
    }

    return new Menu({ name: GIFT_MENU_NAME, count: 1 }).getInfo();
  }

  getBadge() {
    const totalPrice = this.getTotalPrice();

    const badgeDetail = EVENT_BADGE.find((badge) => totalPrice >= badge.amount);

    return badgeDetail?.badge ?? null;
  }

  getDiscountAmountByEventName(eventName) {
    if (eventName === EVENT_NAME.christmas) {
      return this.#calculateChristmasDiscount();
    }

    if (eventName === EVENT_NAME.giveaway) {
      return this.#calculateGiveawayDiscount();
    }

    if (eventName === EVENT_NAME.special) {
      return this.#calculateSpecialDiscount();
    }

    return this.#calculateWeekDiscount(eventName);
  }

  #calculateWeekDiscount(eventName) {
    const isEventDate = this.#isEventDate(eventName, this.#date.getDayOfWeek());
    const isEnough = this.#isMoreThanMinPrice(eventName);

    if (!isEventDate || !isEnough) {
      return 0;
    }

    const order = this.#filterOrderByCourseName(EVENT_COURSE[eventName]);

    return order.reduce(
      (total, menu) => total + menu.getCount() * DISCOUNT_AMOUNT[eventName],
      0,
    );
  }

  #calculateChristmasDiscount() {
    const day = this.#date.getDay();
    const isEventDate = this.#isEventDate(EVENT_NAME.christmas, day);
    const isEnough = this.#isMoreThanMinPrice(EVENT_NAME.christmas);

    if (!isEventDate || !isEnough) {
      return 0;
    }

    return (
      DISCOUNT_AMOUNT.christmas + (day - 1) * DISCOUNT_AMOUNT.increase_amount
    );
  }

  #calculateGiveawayDiscount() {
    return this.getGiveaway()?.price ?? 0;
  }

  #calculateSpecialDiscount() {
    const isEnough = this.#isMoreThanMinPrice(EVENT_NAME.special);

    if (!isEnough) {
      return 0;
    }

    return DISCOUNT_AMOUNT.special;
  }

  #isEventDate(eventName, date) {
    return EVENT_DATE[eventName].includes(date);
  }

  #filterOrderByCourseName(courseName) {
    return this.#order.filter((menu) => menu.compareCourseName(courseName));
  }

  #isMoreThanMinPrice(eventName) {
    const totalPrice = this.getTotalPrice();

    return totalPrice >= EVENT_MIN_PRICE[eventName];
  }

  #validateOrder(order) {
    OrderValidate.isOnlyOrderedDrink(order);
    OrderValidate.isDuplicatedMenu(order);
    OrderValidate.isExceedMaxMenuCount(order);
  }
}

export default EventModel;
