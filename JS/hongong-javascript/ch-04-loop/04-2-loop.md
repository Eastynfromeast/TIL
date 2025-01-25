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

## while 반복문

- if 조건문과 비슷하나, 불리언 표현식이 true 면 계속해서 문장을 실행한다는 점이 다름
- 조건이 변하지 않는다면 무한 루프(infinite loop)에 빠질 수 있으므로 조건을 거짓으로 만들 수 있는 내용이 문장에 포함되어 있어야 함
- `while` 반복문은 조건에 큰 비중이 있을 때 사용하는 것이 좋음

```
while(boolean){
  statment;
}

// 무한 루프
let i = 0;
while (true) { // 조건이 변하지 않으므로 무한히 반복됨
	alert(`${i}번째 반복입니다.`);
	i++;
}
```

## break 키워드

> switch 조건문이나 반복문을 벗어날 때 사용하는 키워드
> 무한 루프를 벗어날 때 break 사용

```
while(true){

} break
```

_무한 루프 벗어나기 예제_

```
// p.184 break 활용
for (let i = 0; true; i++) {
	alert(i + `번째 반복문입니다.`);

	// 진행 여부 묻기
	const isContinue = confirm('계속 하시겠습니까?');
	if (!isContinue) {
		break;
	}
}

alert('프로그램 종료');
```

## continue 키워드

반복문 안의 반복 작업을 멈추고 반복문의 처음으로 돌아가 다음 반복 작업을 진행

```
// p.185
let output = 0;
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 1) {
    continue; // 홀수의 경우 반복을 멈춤
  }
  output += i; // 짝수만 더함
}
alert(output);
```

## 중첩 반복문을 사용하는 피라미드

> 반복문을 여러 겹 중첩해 사용하면 중첩 반복문

- 중첩 반복문을 사용하는 경우
  - n차원 배열 요소를 모두 확인하려면 반복문을 n번 중첩해야
    - 1차원 배열 : 배열이 한 겹 ex. `[1,2,3]`
    - 2차원 배열 : 배열이 두 겹 ex. `[[1,2,3],[4,5,6]]`
  - 출력을 n차원으로 해야 되는 경우
    - ex. 2차원 그래픽 출력, 3차원 그래픽 출력

### 중첩 반복문 사용하기

_예제 1. 피라미드 만들기_

```
let output = '';
for (let i = 0; i < 10; i++) {
	for (let j = 0; j < i; j++) {
		output += '*';
	}
	output += '\n';
}
console.log(output);
```

_예제 2. 중앙 정렬 피라미드 만들기_

```
// p.189 중첩 반복문 2
let output = '';
const blank = 15;
for (let i = 0; i < blank; i++) {
	for (let j = blank; j > i; j--) {
		output += ' ';
	}
	for (let k = 0; k < 2 * i - 1; k++) {
		output += '*';
	}
	output += '\n';
}
console.log(output);
```

- 나름의 해석

  - `i`는 행
  - `j`는 공백 개수로 행이 하나씩 늘어날 때 마다 공백 개수가 줄어들고
  - `k`는 '*' 개수로 홀수여야 하므로, `2*i-1`만큼 붙임

- 패착의 원인 (혼자 문제를 풀었을 때)
  - 중앙 정렬로 보인다고 해서 양쪽의 공백 개수를 셀 필요가 없었음
  - 왼쪽의 공백 개수와 별의 개수만 신경쓰면 알아서 중앙정렬처럼 보이게 될 것
