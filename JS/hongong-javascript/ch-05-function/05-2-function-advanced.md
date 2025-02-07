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
