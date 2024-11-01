# :car: 자동차 경주

간단한 로또 발매기 입니다.

## :bookmark_tabs: 목차

1. [미션 접근하기](#미션-접근하기)
2. [기능 목록](#기능-목록)
3. [데이터 목록](#데이터-목록)
4. [세부 계획](#세부-계획)

<br>

## :mag: 미션 접근하기

**분석**

- 로또는 사용자가 구매한 수 만큼 생성된다. 로또를 발행할 때마다 임의의 숫자 6개를 뽑는다.

- 로또 번호와 당첨 번호를 비교하는 기능이 필요하다. 로또 번호는 발행한 로또마다 다르지만, 당첨 번호는 프로그램을 다시 실행하기 전까지 그대로 유지된다. 즉, 당첨 여부는 각 로또의 고유한 값이 된다. 따라서 두 번호를 비교하여 당첨 여부를 확인하는 것은 로또 객체와 관련된 기능으로 분류하는 것이 적절해 보인다. 또는 로또 당첨을 관리하는 제 3의 기능으로도 생각해 볼 수도 있다.

- 요구 사항을 충족하기 위해 수익률을 계산하는 기능이 필요하다. 수익률을 계산하기 위해서는 일치하는 번호의 개수가 필요하다. 일치하는 번호의 개수는 당첨 여부를 확인하는 기능과 연계하여 구할 수 있을 것으로 보인다.

<br>

**프로그램의 흐름**

- 기능 요구 사항과 분석 내용을 토대로 한 프로그램의 흐름은 다음과 같다.

`구매할 로또 금액` → `구매할 로또 개수 계산` → `추첨 반복 실행` → `로또 객체 생성` → `당첨 번호와 일치하는 번호 수 계산`

`당첨 번호, 보너스 번호` → `당첨된 로또의 일치하는 번호 수 집계` →`수익률 계산`

<br>
<br>

## :sparkles: 기능 목록

### 로또

**1. 사용자가 구입한 로또의 수를 계산하는 기능**

- 구입한 로또 개수는 사용자가 입력한 (구매 금액 / 1,000) 으로 계산한다.

<br>

**2. 사용자가 구입한 수만큼 로또를 발행하는 기능**

- 사용자가 구입한 수만큼 로또를 발행한다.
- 각 로또는 고유한 로또 번호를 가진다.
- 로또 번호는 무작위로 추첨된다.

<br>

**3. 무작위 로또 번호를 추첨하는 기능**

- 6개의 숫자를 무작위로 뽑는다. 숫자들은 로또 번호가 된다.
- 각 숫자는 중복되지 않는다.
- 각 숫자의 범위는 1 ~ 45이다.

<br>

**4. 당첨 번호와 일치하는 번호의 수를 계산하는 기능**

- 당첨 번호 6개와 일치하는 로또 번호의 수를 계산한다.

<br>

**5. 보너스 번호와 일치하는 번호가 존재하는지 확인하는 기능**

- 보너스 번호 1개와 일치하는 번호가 존재하는지 확인한다.

<br>
<br>

### 당첨 분석

**1. 당첨된 로또의 수를 계산하는 기능**

- 당첨된 로또의 수를 계산한다.
- 당첨된 로또의 수는 일치하는 번호 개수를 기준으로 집계한다.

<br>

**2. 수익률을 계산하는 기능**

- 당첨 로또들의 총 수익률을 계산한다.
- 수익률은 `당첨 금액 / 구매 금액`으로 계산한다.
- 수익률은 소수점 둘째 자리에서 반올림한다.

<br>
<br>

### 입력

> 입력은 우아한테크코스 라이브러리(Console)를 이용한다.

**1. 사용자에게 로또 구입 금액을 입력받는 기능**

- 사용자에게 구입할 로또 금액을 입력받는다.
- 로또 금액은 1,000 단위로 입력받는다.
- 형식에 대한 예시는 다음과 같다.
  - `구입금액을 입력해 주세요.`

<br>

**2. 사용자에게 당첨 번호를 입력받는 기능**

- 사용자에게 당첨 번호를 입력 받는다.
- 당첨 번호는 6개의 숫자이다.
- 각 숫자는 쉼표(,)로 구분된다.
- 각 숫자는 서로 중복되지 않는다.
- 각 숫자는 1 ~ 45의 범위를 가진다.
- 형식에 대한 예시는 다음과 같다.
  - `당첨 번호를 입력해 주세요.`

<br>

**3. 사용자에게 보너스 번호를 입력받는 기능**

- 사용자에게 보너스 번호를 입력 받는다.
- 보너스 번호는 1개의 숫자이다.
- 보너스 번호는 당첨 번호와 중복되지 않는다.
- 보너스 번호는 1 ~ 45의 범위를 가진다.
- 형식에 대한 예시는 다음과 같다.
  - `보너스 번호를 입력해 주세요.`

<br>
<br>

### 출력

> 출력은 우아한테크코스 라이브러리(Console)를 이용한다.

**1. 발행된 로또 번호를 출력하는 기능**

- 발행된 로또 번호를 출력한다.
- 각 로또의 번호는 배열에 담아, 오름차순으로 정렬한다.
- 형식에 대한 예시는 다음과 같다.

```
8개를 구매했습니다.
[8, 21, 23, 41, 42, 43]
[3, 5, 11, 16, 32, 38]
[7, 11, 16, 35, 36, 44]
[1, 8, 11, 31, 41, 42]
[13, 14, 16, 38, 42, 45]
[7, 11, 30, 40, 42, 43]
[2, 13, 22, 32, 38, 45]
[1, 3, 5, 14, 22, 45]
```

<br>

**2. 당첨 내역을 출력하는 기능**

- 당첨된 로또 내역을 출력한다.
- 로또 내역에는 일치하는 번호의 개수별 당첨 금액이 포함되어야 한다.
- 로또 내역에는 일치하는 번호의 개수별 로또의 수가 포함되어야 한다.
- 형식에 대한 예시는 다음과 같다.

```
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개

```

<br>

**3. 수익률을 출력하는 기능**

- 당첨 로또의 총 수익률을 출력한다.
- 형식에 대한 예시는 다음과 같다.
  - `총 수익률은 62.5%입니다.`

<br>
<br>

### 예외 처리

> **에러가 발생한 로직은 다시 실행한다.**

**1. 로또 구입 금액 입력값**

- 로또 구입 금액의 예외 상황은 다음과 같다.
  - 숫자가 아닌 경우
  - 양수가 아닌 경우
  - 1,000으로 나누어 떨어지지 않는 경우

<br>

**2. 당첨 번호 입력값**

- 당첨 번호의 예외 상황은 다음과 같다.
  - 숫자가 아닌 경우
  - 1 이상 45 이하의 수가 아닌 경우
  - 정수가 아닌 경우
  - 중복되는 숫자가 존재하는 경우

<br>

**3. 보너스 번호 입력값**

- 보너스 번호의 예외 상황은 다음과 같다.
  - 숫자가 아닌 경우
  - 1 이상 45 이하의 수가 아닌 경우
  - 정수가 아닌 경우
  - 당첨 번호와 중복되는 숫자가 존재하는 경우

<br>
<br>

## :bar_chart: 데이터 목록

**1. 로또 구매 금액**

- number
- string 타입의 input 값으로 넘어옴.

**2. 당첨 번호**

- number
- 쉼표(,)로 구분된 string 타입의 input 값으로 넘어옴.

**3. 보너스 번호**

- number
- string 타입의 input 값으로 넘어옴.

**4. 당첨 로또 수**

- Object
- 등수를 key, 당첨 수량을 value로 하는 객체

**5. 수익률**

- number
- 소수 첫째 자리까지 존재하는 실수

<br>
<br>

## :date: 세부 계획

**구현 우선순위**

1. 로또 관련 기능
2. 당첨 관리 기능
3. 입출력
4. 예외 처리

<br>

- 로또 객체를 비롯한 구체적인 핵심 로직을 먼저 구현하고, UI, 예외 처리와 관련된 기능을 순차적으로 구현할 계획임.

- 세부적으로는 각 단위 기능을 구현한 후에 이를 테스트할 수 있는 코드를 작성하여 기능1 - 테스트1 - 기능2 - 테스트2... 순서를 유지할 예정임.

<br>
