/* 
p.163 push()
const todos = ['우유 구매', '업무 매일 확인하기', '필라테스 수업'];
console.log(todos);

todos.push('저녁 식사 준비하기');
console.log(todos); */

//p.164 인덱스를 사용해 배열 뒷부분에 요소 추가하기
function p164() {
	const fruitsA = ['사과', '배', '바나나'];
	fruitsA[10] = '귤';
	console.log(fruitsA);
	fruitsA[fruitsA.length] = '키위';
	console.log(fruitsA);
}

// p.166 splice()
function p166Splice() {
	const itemsA = ['사과', '배', '바나나'];
	itemsA.splice(2, 1); // 인덱스 2의 '바나나' 제거
	console.log(itemsA);
}

// p.167 indexOf() + splice()
function p167IndexOf() {
	const itemsB = ['사과', '배', '바나나'];
	const index = itemsB.indexOf('바나나'); // 2
	itemsB.splice(index, 1);
	console.log(itemsB); //  ['사과', '배']
}

// p.168 배열 내부에서 특정 값을 가진 요소 모두 제거하기
function p168Filter() {
	const itemsE = ['사과', '배', '바나나', '귤', '귤'];
	console.log(itemsE.filter(item => item !== '귤')); // ['사과', '배', '바나나']
}

// p.168 배열의 특정 위치에 요소 추가 splice()
function p168Splice() {
	const itemsD = ['사과', '귤', '바나나', '오렌지'];
	itemsD.splice(1, 0, '양파'); // ['사과','양파','귤', '바나나', '오렌지'];
}

// p.169 비파괴적 처리
function p169NotMutatingOrCopying() {
	const a = '안녕';
	const b = '하세요';
	const c = a + b; // 이 과정에서 a,b 의 내용이 달라지지 않으므로 비파괴적
}

// P.170 파괴적 처리
function p170Mutataing() {
	const array = ['사과', '배', '바나나'];
	array.push('귤');
	console.log(array); // ['사과', '배', '바나나','귤'] 로 변경되었으므로 파괴적 처리
}

function p172Q2() {
	const array = [1, 2, 3, 4];

	console.log(array.length); // 4
	console.log(array.push(5)); // 5
	console.log(array); // [1,2,3,4,5]
}

// p.173 파괴적 처리 vs 비파괴적 처리
// 3-1
const strA = '사과, 배, 바나나, 귤';
strA.split(','); // ['사과','배','바나나','귤']
strA; // '사과, 배, 바나나, 귤'
/* => 비파괴적 처리
	`String.prototype.split(seperator)` 은 주어진 문자열을 seperator 마다 끊은 부분 문자열을 담은 배열을 반환할 뿐 기존의 문자열을 변경하지 않음
*/

// 3-2
const arrayB = ['사과', '배', '바나나', '귤'];
arrayB.push('감');
arrayB; //['사과','배','바나나','귤','감']
/* => 파괴적 처리
`Array.prototype.push()` 메서드는 변경 메서드로 기존의 배열에 새로운 값을 추가하므로 파괴적 처리
*/

// 3-3
const arrayC = [1, 2, 3, 4, 5];
console.log(arrayC.map(x => x * x));
console.log(arrayC);
/* => 비파괴적 처리
`Array.prototype.map()`은 호출한 배열의 모든 요소에 주어진 함수를 호출한 결과로 채운 새로운 배열을 생성하는 
복사 메서드로 원본 자료를 파괴하지 않는 비파괴적 처리를 함
*/

// 3-4
const strD = ' 여백이 포함된 메시지   ';
strD.trim(); // '여백이 포함된 메시지'
strD; // ' 여백이 포함된 메시지   '
/* => 비파괴적 처리
`String.prototype.trim()`은 문자열 양 끝의 공백을 제거하면서 원본 문자열을 수정하지 않고 새로운 문자열을 반환하므로
비파괴적 처리라 할 수 있음
*/
