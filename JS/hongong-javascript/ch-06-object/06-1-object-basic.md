# 06-1. 객체의 기본

## 객체 Object

- 객체는 중괄호 `{...}`로 생성하고
- 키 key와 값 value을 콜론`:`으로 `키 : 값`
- 이 키와 값의 형태의 자료를 쉼표`,`로 연결

```javascript
const product = {
	제품명: '7D 건조 망고',
	유형: '당절임',
	성분: '망고, 설탕, 메타중아황산나트륨, 치자황색소',
	원산지: '필리핀',
};
```

_대괄호로 객체의 요소에 접근하기_

```javascript
product['제품명']; // '7D 건조 망고'
product['유형']; // '당절임'
```

_온점으로 객체의 요소에 접근하기_

```javascript
product.제품명; // '7D 건조 망고'
product.유형; // '당절임'
```

## 속성 property 과 메소드 method

- 요소 element : 배열 내부에 있는 값
- 속성 property : 객체 내부에 있는 값
  - 모든 형태의 자료형 가능
  ```javascript
  const object = {
  	number: 273,
  	string: '구름',
  	boolean: true,
  	array: [52, 273, 103, 32],
  	method: function () {},
  };
  ```

### 속성과 메소드 구분하기

- 메소드 method : 객체의 속성 중 함수 자료형인 속성
  ```javascript
  const son = {
  	name: '누리누',
  	eat: function (food) {}, // 화살표 함수는 메소드로 사용하지 않음
  };
  // 메소드 호출
  son.eat();
  ```

### 메소드 내부에서 this 키워드 사용하기

- `this` : 메소드 내에서 자기 자신이 가진 속성을 표시

  ```javascript
  const son = {
  	name: '누리누',
  	eat: function (food) {
  		alert(this.name + '은/는 ' + food + '을/를 먹습니다');
  	},
  };

  son.eat('딸기');
  ```

## 동적으로 객체 속성 추가/제거

### 동적으로 객체 속성 추가하기

```javascript
const son = {};
son.name = 'Nuri';
son.hobby = 'walking';
son.professsion = 'home protector';

console.log(JSON.stringify(son, null, 2));
/*
{
  "name": "Nuri",
  "hobby": "walking",
  "professsion": "home protector"
}
*/
```

### 동적으로 객체 속성 제거하기

`delete 객체.속성`

```javascript
delete son250.professsion;
console.log(JSON.stringify(son250, null, 2));
/**
{
  "name": "Nuri",
  "hobby": "walking"
}
*/
```

## 메소드 간단 선언 구문

```javascript
const son = {
	name: '누리누',
	// function 따로 쓸 필요 X
	eat(food) {
		alert(this.name + '은/는 ' + food + '을/를 먹습니다');
	},
};
```

### 화살표 함수를 사용한 메소드

- 익명 함수와 화살표 함수는 객체의 메소드로 사용될 때 `this` 키워드를 다루는 방식이 다르다
  - 익명 함수의 `this` : 함수 자기자신
  - 화살표 함수의 `this` : window 객체
    - window 객체 : 웹 브라우저 자체, _웹 브라우저에서 실행하는 자바스크립트의 핵심 객체_

```javascript
const test252 = {
	fnA: function () {
		console.log(this);
	},
	fnB: () => {
		console.log(this);
	},
};

test252.fnA(); // {fnA: ƒ, fnB: ƒ} 현재 코드에서의 test252 객체 출력
test252.fnB(); // Window {window: Window, self: Window, document: document, name : '', location: Location,...} window 객체 출력
```
