# 05-1. 함수의 기본 형태

> 함수 호출 === 함수를 사용하는 것
> 매개 변수 : 함수를 호출 할 때 괄호 내부에 넣는 여러 가지 자료
> 리턴값 : 함수를 호출해서 최종적으로 나오는 결과

## 익명 함수

함수란? 코드의 집합을 나타내는 자료형

```javascript
function () { }
```

함수의 좋은 점?

- 반복되는 코드의 경우, 한 번의 정의로 반복적으로 사용 가능 => 반복 작업을 피할 수 있음
- 긴 프로그램을 기능별로 여러 함수로 나눠 작성하면 모듈화 가능 => 코드의 가독성이 좋아짐
- 기능별(함수별)로 수정 가능 => 유지 보수 편리

- 함수의 자료형 === `function`
- 익명 함수 Anonymous function : 이름이 붙어있지 않은 함수

## 선언적 함수 : 이름이 있는 함수

```javascript
function 함수() {}
```

- 익명 함수와 다르게 함수를 콘솔로 출력하면 이름이 함께 나옴

## 매개변수와 리턴값

- 매개변수 parameter : 함수를 호출할 때 괄호 안에 적는 것 (함수에 전달되는 이름이 있는 변수)
- 리턴값 return value: 함수의 최종 결과

```javascript
function 함수(param1, param2, param3) {
	statement;
	statement;
	return returnValue;
}
```

## 기본적인 함수 예제

### 윤년을 확인하는 함수 만들기

- 윤년의 특징
  - 4로 나누어 떨어지는 해
  - 100으로 나누어 떨어지지 않음
  - 400으로 나누면 떨어짐

```javascript
function isLeapYear(year) {
	let answer = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? '윤년입니다.' : '윤년이 아닙니다.';
	return year + '년은 ' + answer;
}
```

### A부터 B까지 더하는 함수

```javascript
function sumAll(a, b) {
	let output = 0;
	for (let i = a; i <= b; i++) {
		output += i;
	}
	return output;
}
```

### 최솟값 구하는 함수

```javascript
function getMin(array) {
	let output = array[0];
	for (const item of array) {
		if (output > item) {
			output = item;
		}
	}
	return output;
}

const testArray = [52, 273, 32, 103, 275, 24, 57];
console.log(`${testArray} 중에서 \n 최솟값 = ${getMin(testArray)}`);
```

## 나머지 매개변수 ...rest parameter

- 가변 매개변수 함수 : 매개변수의 개수가 고정적이지 않은 함수
- => _나머지 매개변수 rest parameter_ 로 구현

```javascript
function 함수 이름 (...rest){ }
```

_나머지 매개변수를 사용한 배열 만들기_

```javascript
function p206RestParameter(...items) {
	console.log(items);
}
console.log(p206RestParameter(1, 2, 3)); // [1,2,3]
```

## 나머지 매개변수와 일반 매개변수 조합하기

```javascript
function 함수 이름(param1, param2, ...rest params){ }
```

_p.208 나머지 매개변수와 일반 매개변수를 갖는 함수_

```javascript
function p208(a, b, ...c) {
	console.log(a, b, c);
}

p208(1, 2); // 1,2,[]
p208(1, 2, 3); // 1,2,[3]
p208(1, 2, 3, 4); // 1,2,[3,4]
```

- `typeof 배열`의 값은 `object`

## 전개 연산자 spread operator

배열을 전개해서 함수의 매개변수로 전달

```javascript
함수 이름 (...배열)
```

_전개 연산자의 활용_

```javascript
function p211(...items) {
	console.log(items);
}
const array = [1, 2, 3, 4];

console.log('# 전개 연산자를 사용하지 않은 경우');
p211(array); // [Array(4)]

console.log('# 전개 연산자를 사용한 경우');
p211(...array); // (4) [1,2,3,4]
```

## 기본 매개변수

매개변수에 기본값을 지정

```javascript
함수 이름(param1, param2=default2, param3=default3){ }
```

### 구 버전 JS에서 가변 매개변수 함수 구현하기

arguments : 배열 내부에서 사용할 수 있는 특수한 변수

- 구 버전 JS에서 가변 매개변수 함수를 구현할 때 사용
- 매개변수와 관련된 여러 정보를 확인할 수 있고
- 배열과 비슷하게 사용 가능

```javascript
function getArguments() {
	console.log(arguments);
	for (let i = 0; i < arguments.length; i++) {
		console.log(`${i}번째 요소 : ${arguments[i]}`);
	}
}

getArguments(1, 2);
// Arguments(2) [1,2 callee:f, Symbol(Symbol.iterator) : f]
// (해석) 배여로가 비슷한 자료형이지만 배열은 X
// 0번째 요소 : 1
// 1번째 요소 : 2
```

### 구 버전 JS에서 전개 연산자 구현하기

_apply()_ 이해하기

~~아니 이게 뭐람~~

```javascript
function p215Apply(...items) {
	console.log(items);
}

const arrayA = [1, 2, 3, 4];
console.log(p215Apply.apply(null, arrayA)); // [1,2,3,4]
```

### 구 버전 JS에서 기본 매개변수 구하기

```javascript
function p216getEarning(wage, hours) {
	wage = typeof wage != undefined ? wage : 8590;
	hours = typeof hours !== undefined ? hours : 52;
	return wage * hours;
}
```
