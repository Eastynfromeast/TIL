# 03-2 switch 조건문과 짧은 조건문

## switch 조건문

> 특정 값의 조건을 비교하기 위해 사용

```
switch(data){
  case caseA:
    sentenceA
    break
  case caseB:
    sentenceB
    break
  default:
    break
}
```

- `break` : switch 조건문이나 반복문을 빠져나가기 위해 사용하는 키워드
  - 동작 : break을 만나면 switch 조건문이나 반복문을 완전히 빠져나감

### switch 조건문을 if 조건문으로 변환하기

모든 switch 조건문은 if 조건문으로 바꿀 수 있으나 범위를 가지는 if 조건문을 switch 조건문으로 대체하기는 어려움

## 조건부 연산자 Conditional Operator

조건문과 비슷한 역할을 하며 *삼항 연산자*라고 부르기도 함

```
불리언 표현식 ? true 일 때의 결과 : false 일 떄의 결과
```

## 짧은 조건문

논리 연산자의 특성을 조건문으로 사용하는 것

### 논리합 연산자 사용 ||

true가 확실할 때 추가 연산을 진행하지 않음
좌변이 false일 경우 우변을 실행함

```
불리언 표현식 || 불리언 표현식이 false일 때 실행할 문장
  true || console.log('실행될까요?') // true
  false || console.log('실행될까요?') // 실행될까요? undefined
```

### 논리곱 연산자를 사용 &&

좌변이 거짓이면 우변을 실행하지 않음

```
false인 표현식 && 불리언 표현식이 false일 때 실행할 문장
```

- 숫자 연산속도 >> 문자열 연산 속도

  - 컴퓨터는 모든 것을 숫자로 계산하니까

- 컴퓨터에 적합한 조건을 찾기 위해 다른 사람의 코드를 보면서 많이 경험해보세요
