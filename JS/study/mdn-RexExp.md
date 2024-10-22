# RegExp

RegExp 생성자는 패턴을 사용해 텍스트를 판별할 때 사용합니다.

## 정규 표현식

[mdn 정규 표현식](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_expressions)
정규 표현식 혹은 정규식은 특정 문자 조합을 찾기 위한 패턴
JS 에서는 정규 표현식도 객체

### 정규 표현식 인스턴스 메서드

- `RegExp`
  - `exec()` : `match()` 메서드와 유사하지만 무조건 첫번째 매칭 결과만 반환
  - `test()` : 문자열이 정규표현식과 매칭되면 true 아니면 false 반환
- `String`의 다른 메서드들과 함께 사용 가능
  - `match()` : 문자열에서 정규 표현식에 매칭되는 항목들을 "배열"로 반환
  - `matchAll()` : 문자열에서 정규식에 반하는 모든 반복자를 반환
  - `replace()` : 문자열에서 특정 패턴(문자열 혹은 정규식)으로 일치하는 항목을 교체해 새로운 문자열을 반환. 패턴이 문자열일 경우 첫번째만 교체됨.
  - `search()` : 정규식과 이 문자열 간에 일치하는 항목이 있는지 검색하여 문자열에처 *첫 번째*로 일치하는 항목의 인덱스를 반환
  - `split()` : 문자열을 정규 표현식에 매칭되는 항목으로 쪼개어 "배열"로 반환

### 정규 표현식 만들기

- 슬래시로 패턴을 감싸서 작성 `const re = /ab+c/;`
- 정규 표현식 리터럴은 스크립트를 불러올 때 컴파일됨 => 바뀔 일이 없는 패턴의 경우 리터럴을 사용하면 성능이 향상됨
  `const re = new RegExp("ab+c")`

### 정규 표현식 패턴 작성하기

- 단순 패턴 : 문자열을 있는 그대로 탐색
- 특수 문자 : 직접적인 일치 이상의 탐색이 필요할 때 특수 문자 사용

#### Assertions

어서션에는 줄이나 단어의 시작과 끝을 나타내는 경계와, 일치가 가능한 방법을 나타내는 패턴(전방탐색, 후방탐색, 조건 표현식 등)이 포함됩니다.

- `^` : 인풋의 시작에 매치되는지 확인
- `$` : 인풋의 끝에 매치되는지 확인
- `\b` : 영문자 영역 확인, 다른 영문자가 앞이나 뒤에 붙지 말아햐 함
- `\B` : 영문자 아닌 영역 확인

#### Character classes

- `.` : 와일드 카드? 라인 터미네이터 (`\n, \r, \u2028, \u2029`)를 제외한 모든 단일 글자(any single character)와 매치됨
- `\d` : 모든 아라비아 숫자를 매치 == `[0-9]`
- `\D` : 아라비아 숫자가 character를 매치 == `[^0-9]`
- `\w` : word character class escape 언더스코어를 포함한 기본 라틴 알파벳과 숫자에 매치 == `[A-Za-z0-9_]`
- `\W` : 기본 라틴 알파벳에 해당하지 않는 word character에 매치 == `[^A-Za-z0-9_]`
- `\s` : 공백 문자 escape == `[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]`

---

## RegExp() 생성자

[mdn docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp)
RegExp 생성자는 패턴을 사용해 텍스트를 판별할 때 사용하는 정규 표현식 객체를 생성합니다.

### 구문

- 표기

  - 리터럴 : `/pattenrs/flgs`
  - 생성자 : `new RegExp(pattern[, flags])`
  - 팩토리 표기법 가능 `RegExp(pattern[, flags])`

- 매개 변수
  - 패턴 : 정규 표현식을 나타내는 텍스트, 패턴은 특수 문자가 포함 가능해 더 넓은 범위의 값을 판별할 수 있음
  - 플래그 : 정규 표현식에 추가할 플래그.
    - `g` : 문자열 전체 판별
    - `i` : 대소문자 무시 (정규식은 기본적으로 대소문자 구분)
    - `m` : 여러 줄 확인
    - `s` : "dotAll" `.` 이 줄바꿈에도 일치?
    - `u` : 유니코드
    - `y` : stikcy?

### 참고

[JavaScript 정규 표현식 문법 총정리 + 응용 예제](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC)

---
