# 04-2 반복문

## `for...in` 반복문

- 배열과 함께 사용할 수 있는 반복문
  - 배열 요소를 하나하나 꺼내서 특정 문장을 실행할 때 사용

```
for(const variable in array or object){
  statement;
}
```

```
// p.175
const todos = ['우유 구매', '업무 메일 확인하기', '필라테스 수업'];
for (const index in todos) {
	console.log(`${index}번째 할 일 : ${todos[index]}`);
}
```

_for...in 코드 블록_

```
for (const key in object) {
  if (Object.prototype.hasOwnProperty.call(object, key)) {
    const element = object[key];

  }
}
```

#### Q. 예제를 써보고 든 의문 : 왜 index가 오지?

`for...in` 문은 임의의 순서로 객체의 *속성*들에 대해 반복

> for...in 문은 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복합니다.

- mdn에 의하면 배열에는 `for...in` 대신 `Array.prototype.forEac()` 나 `for...of`를 사용하라고 권장
  - 왜? `for...in`은 특정 순서에 따라 인덱스를 반환하는 것을 보장할 수 없기 때문
  - 인덱스는 정수로 열거 가능한 속성이며, 일반적인 객체의 속성들과 같음
  - ref. [mdn for...in](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in#%EC%99%9C_for...in%EC%9D%84_%EC%82%AC%EC%9A%A9%ED%95%A9%EB%8B%88%EA%B9%8C)

## `for...of` 반복문

- 요소의 값을 반복할 때 안정적으로 사용 가능

```
for(const variable of array or object){
  statement;
}
```

```
// p.177
const todos = ['우유 구매', '업무 메일 확인하기', '필라테스 수업'];
for (const todo of todos) {
	console.log(`오늘의 할 일 : ${todo}`);
}
```

## for 반복문

특정 횟수만큼 반복하고 싶을 때 사용하는 범용적인 반복문

```
for (let i=0; i < 반복 횟수; i++){
  statement;
}
```

### for 반복문과 함께 배열 사용하기

보통 배열의 length 만큼 반복을 돌리는 형태로 사용

- for 반복문은 빠른 속도로 많은 양을 반복 작업하므로 사용 범위가 넓다

```
// p.180 for loop and array
for (let i = 0; i < todos.length; i++) {
	let order = Number(i) + 1;
	console.log(`${order}번째 할 일 : ${todos[i]}`);
}

// p.180 for 반복문으로 배열 반대로 출력하기
for (let i = todos.length - 1; i >= 0; i--) {
	let order = Number(i) + 1;
	console.log(`${order}번째 할 일 : ${todos[i]}`);
}
```
