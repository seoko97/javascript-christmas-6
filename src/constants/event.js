import { COURSE_NAME } from './menu.js';

const EVENT_NAME = Object.freeze({
  christmas: 'christmas',
  weekday: 'weekday',
  weekend: 'weekend',
  special: 'special',
  giveaway: 'giveaway',
});

const EVENT_DATE_CHRISTMAS = Object.freeze(
  Array.from({ length: 25 }, (_, i) => i + 1),
);

const EVENT_DATE_WEEKDAY = Object.freeze([0, 1, 2, 3, 4]);

const EVENT_DATE_WEEKEND = Object.freeze([5, 6]);

const EVENT_DATE_SPECIAL = Object.freeze([3, 10, 17, 24, 25, 31]);

const EVENT_OUTPUT = Object.freeze({
  [EVENT_NAME.christmas]: '크리스마스 디데이 할인',
  [EVENT_NAME.weekday]: '평일 할인',
  [EVENT_NAME.weekend]: '주말 할인',
  [EVENT_NAME.special]: '특별 할인',
  [EVENT_NAME.giveaway]: '증정 이벤트',
});

const EVENT_DATE = Object.freeze({
  [EVENT_NAME.christmas]: EVENT_DATE_CHRISTMAS,
  [EVENT_NAME.weekday]: EVENT_DATE_WEEKDAY,
  [EVENT_NAME.weekend]: EVENT_DATE_WEEKEND,
  [EVENT_NAME.special]: EVENT_DATE_SPECIAL,

  min_date: 1,
  max_date: 31,

  year: 2023,
  month: 12,
});

const EVENT_MIN_PRICE = Object.freeze({
  [EVENT_NAME.christmas]: 10_000,
  [EVENT_NAME.weekday]: 10_000,
  [EVENT_NAME.weekend]: 10_000,
  [EVENT_NAME.special]: 10_000,
  [EVENT_NAME.giveaway]: 120_000,
});

const DISCOUNT_AMOUNT = Object.freeze({
  [EVENT_NAME.christmas]: 1_000,
  [EVENT_NAME.weekday]: 2_023,
  [EVENT_NAME.weekend]: 2_023,
  [EVENT_NAME.special]: 1_000,
  [EVENT_NAME.giveaway]: 25_000,

  increase_amount: 100,
});

const EVENT_COURSE = Object.freeze({
  [EVENT_NAME.weekday]: COURSE_NAME.dessert,
  [EVENT_NAME.weekend]: COURSE_NAME.main,
});

const EVENT_BADGE = Object.freeze([
  { badge: '산타', amount: 20_000 },
  { badge: '트리', amount: 10_000 },
  { badge: '별', amount: 50_00 },
]);

export {
  EVENT_OUTPUT,
  EVENT_NAME,
  EVENT_DATE_SPECIAL,
  EVENT_DATE_WEEKDAY,
  EVENT_DATE_WEEKEND,
  EVENT_DATE,
  EVENT_MIN_PRICE,
  EVENT_COURSE,
  EVENT_BADGE,
  DISCOUNT_AMOUNT,
};
