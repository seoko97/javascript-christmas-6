import { EVENT_NAME } from '../../constants/event.js';

class EventPreviewController {
  #outputView;

  #eventModel;

  constructor({ outputView, eventModel }) {
    this.#outputView = outputView;
    this.#eventModel = eventModel;
  }

  printEventPreview() {
    this.#printOrderMenu();

    this.#printTotalPriceBeforeDiscount();

    this.#printGiftMenu();

    this.#printBenefitDetail();

    this.#printTotalBenefit();

    this.#printTotalPriceAfterDiscount();

    this.#printBadge();
  }

  #printOrderMenu() {
    const order = this.#eventModel.getOrder();

    this.#outputView.printOrderMenu(order);
  }

  #printTotalPriceBeforeDiscount() {
    const totalPrice = this.#eventModel.getTotalPrice();

    this.#outputView.printBeforeDiscountMessage(totalPrice);
  }

  #printTotalPriceAfterDiscount() {
    const totalPrice = this.#eventModel.getTotalPrice();
    const totalBenefit = this.#calculateTotalBenefit();
    const giveawayAmount = this.#eventModel.getDiscountAmountByEventName(
      EVENT_NAME.giveaway,
    );

    this.#outputView.printTotalPriceAfterDiscount(
      totalPrice - totalBenefit + giveawayAmount,
    );
  }

  #printGiftMenu() {
    const giftMenu = this.#eventModel.getGiveaway();

    this.#outputView.printGiftMenu(giftMenu);
  }

  #printBenefitDetail() {
    const events = this.#calculateBenefitDetail();

    this.#outputView.printBenefitDetail(events);
  }

  #printTotalBenefit() {
    const totalBenefit = this.#calculateTotalBenefit();

    this.#outputView.printTotalBenefit(totalBenefit);
  }

  #printBadge() {
    const badge = this.#eventModel.getBadge();

    this.#outputView.printBadge(badge);
  }

  #calculateTotalBenefit() {
    const events = this.#calculateBenefitDetail();

    return events.reduce((total, event) => total + event.discount, 0);
  }

  #calculateBenefitDetail() {
    const eventNames = Object.values(EVENT_NAME);

    return eventNames.map((eventName) => ({
      eventName,
      discount: this.#eventModel.getDiscountAmountByEventName(eventName),
    }));
  }
}

export default EventPreviewController;
