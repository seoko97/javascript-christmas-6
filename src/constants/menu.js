const COURSE_NAME = Object.freeze({
  appetizer: 'APPETIZER',
  main: 'MAIN',
  dessert: 'DESSERT',
  drink: 'DRINK',
});

const MENU = Object.freeze([
  { name: '양송이수프', price: 6_000, course: COURSE_NAME.appetizer },
  { name: '타파스', price: 5_500, course: COURSE_NAME.appetizer },
  { name: '시저샐러드', price: 8_000, course: COURSE_NAME.appetizer },

  { name: '티본스테이크', price: 55_000, course: COURSE_NAME.main },
  { name: '바비큐립', price: 54_000, course: COURSE_NAME.main },
  { name: '해산물파스타', price: 35_000, course: COURSE_NAME.main },
  { name: '크리스마스파스타', price: 25_000, course: COURSE_NAME.main },

  { name: '초코케이크', price: 15_000, course: COURSE_NAME.dessert },
  { name: '아이스크림', price: 5_000, course: COURSE_NAME.dessert },

  { name: '제로콜라', price: 3_000, course: COURSE_NAME.drink },
  { name: '레드와인', price: 60_000, course: COURSE_NAME.drink },
  { name: '샴페인', price: 25_000, course: COURSE_NAME.drink },
]);

const APPETIZER_MENU = Object.freeze(
  MENU.filter((menu) => menu.course === COURSE_NAME.appetizer),
);

const MAIN_MENU = Object.freeze(
  MENU.filter((menu) => menu.course === COURSE_NAME.main),
);

const DESSERT_MENU = Object.freeze(
  MENU.filter((menu) => menu.course === COURSE_NAME.dessert),
);

const DRINK_MENU = Object.freeze(
  MENU.filter((menu) => menu.course === COURSE_NAME.drink),
);

const COURSE = Object.freeze({
  [COURSE_NAME.appetizer]: APPETIZER_MENU,
  [COURSE_NAME.main]: MAIN_MENU,
  [COURSE_NAME.dessert]: DESSERT_MENU,
  [COURSE_NAME.drink]: DRINK_MENU,
});

const MIN_MENU_COUNT = 1;
const MAX_MENU_COUNT = 20;

const GIFT_MENU_NAME = '샴페인';

export {
  MENU,
  COURSE_NAME,
  COURSE,
  APPETIZER_MENU,
  MAIN_MENU,
  DESSERT_MENU,
  DRINK_MENU,
  MIN_MENU_COUNT,
  MAX_MENU_COUNT,
  GIFT_MENU_NAME,
};
