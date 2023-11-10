import { printMessage } from '../../utils/index.js';
import { OUTPUT } from '../../constants/message.js';
import { EVENT_OUTPUT } from '../../constants/event.js';

const OutputView = {
  printOrderMenu(order) {
    printMessage(OUTPUT.order_menu);

    const message = order
      .map((menu) => this.generateMenuMessage(menu))
      .join('\n');

    printMessage(message);
  },

  printGiftMenu(menu) {
    printMessage(OUTPUT.gift_menu);

    if (!menu) {
      this.printNone();
      return;
    }

    const message = this.generateMenuMessage(menu);

    printMessage(message);
  },

  printBeforeDiscountMessage(price) {
    printMessage(OUTPUT.price_before_discount);

    const message = this.generatePriceMessage(price);

    printMessage(message);
  },
  printAfterDiscountMessage(price) {
    printMessage(OUTPUT.price_after_discount);

    const message = this.generatePriceMessage(price);

    printMessage(message);
  },

  printBenefitDetail(events) {
    printMessage(OUTPUT.benefit_detail);

    const filteredEvents = events.filter((event) => event.discount);

    if (!filteredEvents.length) {
      this.printNone();
      return;
    }

    const message = filteredEvents
      .map((event) => this.generateBenefitDetail(event))
      .join('\n');

    printMessage(message);
  },

  printTotalBenefit(price) {
    printMessage(OUTPUT.total_benefit);

    const message = this.generatePriceMessage(price * -1);

    printMessage(message);
  },

  printTotalPriceAfterDiscount(price) {
    printMessage(OUTPUT.price_after_discount);

    const message = this.generatePriceMessage(price);

    printMessage(message);
  },

  printBadge(badge) {
    printMessage(OUTPUT.event_badge);

    if (!badge) {
      this.printNone();
      return;
    }

    printMessage(badge);
  },

  printNone() {
    printMessage(OUTPUT.none);
  },

  generateBenefitDetail({ eventName, discount }) {
    const eventMessage = EVENT_OUTPUT[eventName];
    const priceMessage = this.generatePriceMessage(discount * -1);

    return `${eventMessage}: ${priceMessage}`;
  },

  generatePriceMessage(price) {
    return `${price.toLocaleString()}원`;
  },

  generateMenuMessage({ name, count }) {
    return `${name} ${count}개`;
  },
};

export default OutputView;
