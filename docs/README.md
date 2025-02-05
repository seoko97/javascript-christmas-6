## 기능 분석

### 12월 이벤트

- 크리스마스 디데이 할인

  - 이벤트 기간: 12월 1일 ~ 12월 25일
  - 1일 1000원으로 시작하여 25일까지 100원씩 증가
  - 총 주문 금액에서 해당 금액만큼 할인

- 평일 할인 (일요일 ~ 목요일): 디저트 메뉴 1개당 2,023원 할인
- 주말 할인 (금요일 ~ 토요일): 메인 메뉴 1개당 2,023원 할인
- 특별 할인: 이벤트 달력에 별이 있다면 총 주문 금액에서 1,000원 할인
- 증정 이벤트: 할인 전 총 주문 금액이 12만원 이상일 때, 샴페인 1개 증정
  - 이벤트 기간: 12월 1일 ~ 12월 31일

### 배지

- 총 해택 금액(할인 금액)에 따라 이벤트 배지 부여
  - 5천원 미만: 없음
  - 5천원 이상 ~ 1만원 미만: 별
  - 1만원 이상 ~ 2만원 미만: 트리
  - 2만원 이상: 산타
  - 조건문을 통해 산타부터 확인하기

### 이벤트 주의 사항

- 총 주문 금액 10,000원 이상부터 이벤트 적용

### 방문 날짜

- `12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)` 라는 질문에 대한 답변을 입력받는다.
- 1에서 31 사이의 숫자만 입력받는다.
- 1에서 31 사이의 숫자가 아닌 경우, `[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.` 출력

```txt
12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)
> 32

[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.

> a

[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.

> -1

[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.

> (빈 값)

[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.
```

### 주문 메뉴

- `주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)`
- 메뉴판에 없는 메뉴 입력시 `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.` 출력
- 메뉴의 개수는 1 이상의 숫자만 입력받는다. 이외 입력 값은 `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.` 출력
- 메뉴 형식이 예시와 다른 경우 `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.` 출력
- 중복 메뉴 입력시 `[ERROR] 유요하지 않은 주문입니다. 다시 입력해 주세요.` 출력
- 음료만 주문시 `[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.` 출력
- 메뉴의 총 개수가 20개를 초과할 경우 `[ERROR] 메뉴는 최대 20개 까지만 주문 가능합니다. 다시 입력해 주세요.` 출력

#### 메뉴 목록

```txt
<애피타이저>
양송이수프(6,000), 타파스(5,500), 시저샐러드(8,000)

<메인>
티본스테이크(55,000), 바비큐립(54,000), 해산물파스타(35,000), 크리스마스파스타(25,000)

<디저트>
초코케이크(15,000), 아이스크림(5,000)

<음료>
제로콜라(3,000), 레드와인(60,000), 샴페인(25,000)
```

#### 예시

```txt
주문하실 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)

> asd-1

[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.

> 해산물파스타-a

[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.

> 해산물파스타,12

[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.

> 해산물파스타-1,해산물파스타-1

[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.

> 레드와인-1

[ERROR] 음료만 주문할 수 없습니다. 다시 입력해 주세요.

> 해산물파스타-21

[ERROR] 메뉴는 최대 20개 까지만 주문 가능합니다. 다시 입력해 주세요.
```

### 계산

- 총 해택 금액: 할인 금액 + 증정 메뉴 가격
- 할인 후 예상 결제 금액: 할인 전 총 주문 금액 - 할인 금액
