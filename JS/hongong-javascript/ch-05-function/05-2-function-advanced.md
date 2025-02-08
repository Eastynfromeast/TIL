# 05-2. 함수 고급

> 자바스크립트 '함수도 하나의 자료'
> => 비동기 프로그래밍
> 람다 or 익명 함수

## 콜백 함수 callback

- 콜백 함수? 매개변수로 전달하는 함수
  - 자바스크립트에서는 함수도 하나의 자료형이므로 전달이 가능

_콜백 함수 1 - 선언적 함수 사용하기_

```
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

```
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

```
const numbers = [273, 52, 103, 32, 57];
numbers.forEach(function (value, index, array) {
	console.log(`${index}번째 요소 : ${value}`);
});

```

### 콜백 함수를 활용하는 함수 : `map()`

`Array.prototype.map()` : 호출한 배열의 모든 요소에 주어진 함수를 호출한 결과로 채운 새로운 배열을 생성

```
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

```
numbers = [0, 1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function (value) {
	return value % 2 === 0;
});

console.log(`원래 배열 : ${numbers}`); // 원래 배열 : 0,1,2,3,4,5
console.log(`짝수만 추출 : ${evenNumbers}`); // 짝수만 추출 : 0,2,4
```

## 화살표 함수 arrow function

> 콜백 함수에 활용하는 `function (){ }`의 간단한 사용 형태

```
(매개변수) => {

}
// or
(매개변수) => 리턴값
```

- 차이점
  - 내부에서 this 키워드가 지칭하는 대상이 다르다

_배열의 메소드와 화살표 함수_

> 메소드 체이닝 Method chaining : 메소드가 리턴하는 값을 기반으로 함수를 연속해서 사용

```
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let methodChaining = numbers
	.filter(value => value % 2 === 0)
	.map(value => value * value)
	.forEach(value => console.log(value));
```
