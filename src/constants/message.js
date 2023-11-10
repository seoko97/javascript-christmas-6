const INPUT = Object.freeze({
  date: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  menu: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

const OUTPUT = Object.freeze({
  benefit_preview: (day) =>
    `12월 ${day}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  order_menu: '\n<주문 메뉴>',
  price_before_discount: '\n<할인 전 총주문 금액>',
  price_after_discount: '\n<할인 후 예상 결제 금액>',
  gift_menu: '\n<증정 메뉴>',
  benefit_detail: '\n<혜택 내역>',
  total_benefit: '\n<총혜택 금액>',
  event_badge: '\n<12월 이벤트 배지>',
  none: '없음',
});

export { INPUT, OUTPUT };
