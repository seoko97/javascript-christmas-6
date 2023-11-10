import InputValidate from '../../utils/validate/InputValidate.js';

import { readLineAsync } from '../../utils/index.js';

import { INPUT } from '../../constants/message.js';
import { REGEX } from '../../constants/regex.js';

const InputView = {
  async readDate() {
    const input = await readLineAsync(INPUT.date);

    InputValidate.isNotNumberDate(input);
    InputValidate.isNotValidDate(input);

    return Number(input);
  },

  async readOrder() {
    const input = await readLineAsync(INPUT.menu);

    InputValidate.isNotValidMenu(input);

    const order = this.parseOrderInput(input);

    return order;
  },

  parseOrderInput(input) {
    const orders = input.split(REGEX.comma);

    const menus = orders.reduce((acc, cur) => {
      const [menuName, menuCount] = cur.split(REGEX.dash);

      acc.push({ name: menuName, count: Number(menuCount) });

      return acc;
    }, []);

    return menus;
  },
};

export default InputView;
