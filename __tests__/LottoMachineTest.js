import { Random } from '@woowacourse/mission-utils';
import LottoMachine from '../src/LottoMachine';
import Lotto from '../src/Lotto';
import { ERROR_MESSAGE } from '../src/Constants';

const mockingRandomNumbers = (numbersArray) => {
  Random.pickUniqueNumbersInRange = jest.fn();

  numbersArray.reduce(
    (prevChain, numbers) => prevChain.mockReturnValueOnce(numbers),
    Random.pickUniqueNumbersInRange,
  );
};

describe('LottoMachine 클래스 테스트', () => {
  test.each([
    ['숫자아님'],
    ['2천원'],
    ['2000원'],
    [null],
    [undefined],
    ['$'],
    ['$2000$'],
  ])('구입 금액이 숫자가 아닐 때 예외가 발생하는지 테스트 (%s)', (payment) => {
    expect(() => new LottoMachine(payment, Lotto)).toThrow(
      ERROR_MESSAGE.notNumber,
    );
  });

  test.each([
    [1000, 1],
    [2000, 2],
    [10000, 10],
    [1000000, 1000],
  ])('구입한 로또 수량을 계산하는지 테스트', (payment, expected) => {
    const lottoMachine = new LottoMachine(payment, Lotto);
    const amount = lottoMachine.getAmount();

    expect(amount).toBe(expected);
  });

  test.each([
    [{ payment: 1000, numbers: [[1, 2, 3, 4, 5, 6]] }],
    [
      {
        payment: 3000,
        numbers: [
          [1, 2, 3, 4, 5, 6],
          [2, 4, 6, 8, 10, 12],
          [1, 4, 23, 25, 28, 41],
        ],
      },
    ],
    [
      {
        payment: 2000,
        numbers: [
          [1, 2, 3, 4, 5, 6],
          [2, 4, 6, 8, 10, 12],
        ],
      },
    ],
    [
      {
        payment: 5000,
        numbers: [
          [1, 2, 3, 4, 5, 6],
          [1, 4, 15, 16, 17, 24],
          [2, 5, 6, 32, 41, 45],
          [4, 12, 31, 34, 35, 40],
          [11, 13, 21, 32, 35, 36],
        ],
      },
    ],
  ])('로또를 발급하는지 테스트', (inputs) => {
    const { payment, numbers } = inputs;
    const lottoMachine = new LottoMachine(payment, Lotto);

    mockingRandomNumbers(numbers);

    const lottos = lottoMachine.getLottos();

    lottos.forEach((lotto, index) => {
      expect(lotto).toBeInstanceOf(Lotto);
      expect(lotto.getNumbers()).toEqual(
        expect.arrayContaining(numbers[index]),
      );
    });
  });
});
