import EventPreviewController from './mvc/controllers/EventPreviewController.js';
import InputDataController from './mvc/controllers/InputDataController.js';

import EventModel from './mvc/models/EventModel.js';

import InputView from './mvc/views/InputView.js';
import OutputView from './mvc/views/OutputView.js';

class App {
  #inputView;

  #outputView;

  #eventModel;

  #inputDataController;

  #eventPreviewController;

  constructor() {
    this.#inputView = InputView;
    this.#outputView = OutputView;
    this.#eventModel = new EventModel();

    this.#inputDataController = new InputDataController({
      inputView: this.#inputView,
      eventModel: this.#eventModel,
    });

    this.#eventPreviewController = new EventPreviewController({
      outputView: this.#outputView,
      eventModel: this.#eventModel,
    });
  }

  async run() {
    await this.#inputDataController.inputEventData();
    this.#eventPreviewController.printEventPreview();
  }
}

export default App;
