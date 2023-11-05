import Validation from './Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.isValidLength(numbers);

    numbers.forEach((number) => {
      Validation.isNumber(number);
      Validation.isNumberInRange(number);
    });

    Validation.isNonDuplicatedNumber(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
