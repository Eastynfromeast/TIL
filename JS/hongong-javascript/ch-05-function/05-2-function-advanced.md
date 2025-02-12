# 05-2. 함수 고급

> 자바스크립트 '함수도 하나의 자료'
> => 비동기 프로그래밍
> 람다 or 익명 함수

## 콜백 함수 callback

- 콜백 함수? 매개변수로 전달하는 함수
  - 자바스크립트에서는 함수도 하나의 자료형이므로 전달이 가능

_콜백 함수 1 - 선언적 함수 사용하기_

```javascript
function p221callThreeTimes(callback) {
	for (let i = 0; i < 3; i++) {
		callback(i);
	}
}

function p221print(i) {
	console.log(`${i}번째 함수 호출`);
}

p221callThreeTimes(p221print);
```

_콜백 함수 2 - 익명 함수 사용하기_

```javascript
p221CallThreeTimes(function (i) {
	console.log(`${i}번째 함수 호출`);
});
```

### 콜백 함수를 활용하는 함수: `forEach()`

`forEach()` : 배열이 갖고 있는 함수로써, 배열 내 요소를 사용해서 콜백 함수를 호출

```
array.forEach(function (value, index, array){});
```

_배열의 forEach() 메소드_

```javascript
const numbers = [273, 52, 103, 32, 57];
numbers.forEach(function (value, index, array) {
	console.log(`${index}번째 요소 : ${value}`);
});
```

### 콜백 함수를 활용하는 함수 : `map()`

`Array.prototype.map()` : 호출한 배열의 모든 요소에 주어진 함수를 호출한 결과로 채운 새로운 배열을 생성

```javascript
const numbers = [273, 52, 103, 32, 57];
let numbersMap = numbers.map(function (value) {
	return value * value;
});
numbersMap.forEach(console.log);
/*
74529 0
2704 1
10609 2
1024 3
3249 4
*/
```

### 콜백 함수를 활용하는 함수 : `filter()`

`Array.prototype.filter()` : 주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링

```javascript
numbers = [0, 1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function (value) {
	return value % 2 === 0;
});

console.log(`원래 배열 : ${numbers}`); // 원래 배열 : 0,1,2,3,4,5
console.log(`짝수만 추출 : ${evenNumbers}`); // 짝수만 추출 : 0,2,4
```

## 화살표 함수 arrow function

> 콜백 함수에 활용하는 `function (){ }`의 간단한 사용 형태

```javascript
매개변수 => {};
// or
매개변수 => 리턴값;
```

- 차이점
  - 내부에서 this 키워드가 지칭하는 대상이 다르다

_배열의 메소드와 화살표 함수_

> 메소드 체이닝 Method chaining : 메소드가 리턴하는 값을 기반으로 함수를 연속해서 사용

```javascript
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let methodChaining = numbers
	.filter(value => value % 2 === 0)
	.map(value => value * value)
	.forEach(value => console.log(value));
```

## 타이머 함수 timer

|          함수 이름          | 설명                                      |
| :-------------------------: | ----------------------------------------- |
|                             | **setTimeout()**                          |
| setTimeout(callback, time)  | 특정 시간 "후에" 함수를 한번 호출         |
|    clearTimeout(timerId)    | setTitmeout() 함수로 설정한 타이머를 제거 |
|                             | **setInterval()**                         |
| setInterval(callback, time) | 특정 시간"마다" 함수를 호출               |
|   clearInterval(timerId)    | setInterval() 함수로 설정한 타이머를 제거 |

- timerId : `setTimeOut()`,`setInterval()` 호출 시의 리턴값으로 나오는 숫자

_타이머 설정하기_

```javascript
setTimeout(() => {
	console.log('1초 후에 실행됩니다.');
}, 1 * 1000);

let count = 0;
setInterval(() => {
	console.log(`1초마다 실행됩니다 (${count}번째)`);
	count++;
}, 1 * 1000);
```

_타이머 취소하기_

```javascript
let id;
let count = 0;
id = setInterval(() => {
	console.log(`1초마다 실행됩니다 (${count}번째)`);
	count++;
}, 1 * 1000);

setTimeout(() => {
	console.log('타이머를 종료합니다.');
	clearInterval(id);
}, 5 * 1000);
```

### 즉시 호출 함수

- 함수 즉시 호출
  ```javascript
  (function () {})();
  ```
- 스코프 Scope : 변수가 존재하는 범위

  - 같은 단계에 있는 경우 -> 무조건 충돌 발생
  - 스코프 단계 변경하려면? 블록 만들기
    - 중괄호 사용
    - 함수 생성

**블록을 사용해 이중 충돌 문제 해결**

```javascript
let pi = 3.14;
console.log(`파이 값은 ${pi}입니다.`); // 파이 값은 3.14 입니다.

// 블록 사용해 스코프 생성
{
	let pi = 3.141592;
	console.log(`중괄호 블록 내 파이 값은 ${pi}입니다.`); // 중괄호 블록 내 파이 값은 3.141592 입니다.
}

// 함수 블록으로 스코프 생성
function fnBlock() {
	let pi = 3.1415;
	console.log(`함수 블록 내 파이 값은 ${pi}입니다.`);
}
fnBlock(); // 함수 블록 내 파이 값은 3.1415 입니다.
console.log(`파이 값은 ${pi}입니다.`); // 파이 값은 3.14 입니다.
```

- 섀도잉 Shadowing : 블록이 다를 때, 내부 변수가 외부 변수를 가리는 현상
  - 내부 블록에서는 블록 내에서 선언한 변수만 볼 수 있음 (같은 스코프?)

### 즉시 호출 함수 문제 해결하기

- 구 버전 자바스크립트의 `var` 키워드는 함수 블록을 사용하는 경우에만 변수 충돌을 막을 수 있음
  - 트랜스파일러도 단순한 블록으로 함수 충돌을 막는 코드는 제대로 변환 불가
- => 즉시 호출 함수를 사용해 충돌 방지

**즉시 호출 함수를 사용한 문제 해결**

```javascript
(function () {
	let pi = 3.14159;
	console.log(`즉시 호출 함수 블록 내 파이 값은 ${pi}입니다.`); //즉시 호출 함수 블록 내 파이 값은 3.14159입니다.
})();
```

### 엄격 모드 Strict mode

코드를 보다 엄격하게 검사하는 모드

```javascript
'use strict';
```

_엄격 모드에서 선언 없이 변수 사용_(불가)
[mdn strict mode](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode)

```html
<script>
	'use strict';
	data = 10;
	console.log(data); // Uncaught ReferenceError: data is not defined
</script>
```

- 즉시 호출 함수의 가장 위쪽에 엄격 모드를 적용하는 경우가 많음
  - 해당 블록 내부에만 엄격 모드 적용 가능
  ```javascript
  (function () {
  	'use strict';
  	console.log('set use strict');
  });
  ```

### 익명 함수와 선언적 함수의 차이

- 반복문의 차이점

  - while 반복문 : 조건 중심 반복
  - for 반복문 : 횟수 or 배열 중심 반복

익명 함수와 선언적 함수의 차이는? 익명 함수가 더 안전?

#### 익명 함수의 사용

익명 함수는 순차적인 코드 실행에서 코드가 해당 줄을 읽을 때 생성

**익명 함수 호출**

```javascript
let anonymousFn;

anonymousFn = function () {
	console.log('1번째 익명 함수입니다');
};

anonymousFn = function () {
	console.log('2번째 익명 함수입니다');
};

anonymousFn(); // 2번째 익명 함수입니다
```

#### 선언적 함수의 사용

선언적 함수는 순차적인 코드 실행이 일어나기 전에 생성됨
=> 같은 블록일 경우 어디에서 함수를 호출에도 상관 X

**선언적 함수 호출**

```javascript
declarativeFn(); // 2번째 익명 함수입니다

function declarativeFn() {
	console.log('1번째 선언적 함수입니다');
}
// 입력한 순서대로 생성되고 같은 이름일 경우 덮어씀
function declarativeFn() {
	console.log('2번째 선언적 함수입니다');
}
```

#### 선언적 함수와 익명 함수의 조합

```javascript
fn = function () {
	console.log('익명 함수입니다.');
};

function fn() {
	console.log('선언적 함수입니다.');
}

fn(); // 익명 함수입니다.
```

> 선언적 함수는 순차적인 코드 실행이 일어나기 전에 생성되므로, `function fn(){}`가 먼저 선언되어 익명 함수가 나중에 선언된 것으로 처리되어 콘솔에서는 '익명 함수입니다.'가 찍힘

#### 블록이 다른 경우에 선언적 함수의 사용

선언적 함수는 어떤 코드 블록을 읽어들일 때 먼저 생성됨
=> 블록이 나뉘어진 경우 선언적 함수의 실행 흐름 예측이 어려워짐

**블록이 다른 경우에 선언적 함수의 사용**

```html
/* 블록 A */
<script>
	declarative();

	function declarative() {
		console.log('1번째 선언적 함수');
	}
</script>

/* 블록 B */
<script>
	function declarative() {
		console.log('2번째 선언적 함수');
	}
</script>

/* 블록 C */
<script>
	declarative();
</script>
/* 1번째 선언적 함수 2번째 선언적 함수 */
```

**let 사용의 의미**
`var`는 이전 코드를 덮어쓸 수 있지만 `let`은 이러한 위험을 원천적으로 차단함

```javascript
let p239fn = function () {
	console.log('익명 함수');
};

function p239fn() {
	console.log('선언적 함수');
}

p239fn(); // Uncaught SyntaxError: Identifier 'p239Fn' has already been declared
```

**통일한다면 익명 함수로 통힐해서 사용하는 것이 안전하다**
