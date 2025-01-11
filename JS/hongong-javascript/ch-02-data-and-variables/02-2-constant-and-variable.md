# 02-2 상수와 변수

## 상수 Constant

- 상수 선언 : 어떠한 자료에 이름을 붙여서 사용
  - 선언 : 상수를 만드는 과정
  - const 키워드 사용
  - `const name = value;`

### 상수 관련 오류

- Identifier has already declared (구문 오류) : 상수 이름은 한 파일에서 한 번만 선언 가능
- Missing initializer in const declaration (구문 오류) : 상수는 한번만 선언 가능하므로 선언할 때 값을 반드시 지정해야 함
- Assignment to constant variable (예외 처리) : 상수의 자료는 선언 후에 변경 불가

## 변수 Variable

- let 키워드로 변수 선언
  - `let pi = 3.141592;`
  - 변수는 값을 재할당 할 수 있음 `pi = 3.14;`
  - var 도 있지만 중복 선언의 위험과 범위의 애매함으로 let으로 대체(..?)

### 변수 관련 오류

- Identifier has already declared (구문 오류) : 변수 이름은 한 파일에서 한 번만 선언 가능

> 언제 상수/변수를 사용하나요?
> 변경할 가능성이 있으면 변수, 없으면 상수를 사용한다

## 변수에 적용 가능한 연산자 : 복합 대입 연산자, 증감 연산자

### 복합 대입 연산자 : 대입 연산자와 다른 연산자를 함께 사용하는 연산자

- \+= : 값을 더함
- \-= : 값을 뺌
- \*= : 값을 곱함
- \/= : 값을 나눔
- \%= : 변수 값에 나머지를 구함

### 증감 연산자 : 복합 대입 연산자를 간략하게 사용

- 변수++ : 기존 변수의 값에 1을 더함 (후위)
- \++변수 : 기존 변수의 값에 1을 더함 (전위)
- 변수-- : 기존 변수의 값에 1을 뺌 (후위)
- \--변수 : 기존 변수의 값에 1을 뺌 (전위)

- 후위 postfix : 해당 문장을 실행한 후 값을 더하거나 뺌
- 전위 prefix : 해당 문장을 실행하기 전 값을 더하거나 뺌

```
let number = 10;
// 후위
console.log(number++); // 10 === console.log(number); number += 1;

// 전위
console.log(++number); // 11 === number += 1; console.log(number);
```

## undefined 자료형

- 상수와 변수로 선언하지 않은 식별자는 undefined 자료형이 된다
- 값이 없는 변수 또한 undefined `let a; // undefined`
