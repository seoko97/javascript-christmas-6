import { retryWithValidation } from '../../utils/index.js';

class InputDataController {
  #inputView;

  #eventModel;

  constructor({ inputView, eventModel }) {
    this.#inputView = inputView;
    this.#eventModel = eventModel;
  }

  async inputEventData() {
    await retryWithValidation(this.#inputDate.bind(this));
    await retryWithValidation(this.#inputOrder.bind(this));
  }

  async #inputDate() {
    const date = await this.#inputView.readDate();

    this.#eventModel.setDate(date);
  }

  async #inputOrder() {
    const order = await this.#inputView.readOrder();

    this.#eventModel.setOrder(order);
  }
}

export default InputDataController;
