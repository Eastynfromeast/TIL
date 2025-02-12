// p.221 콜백 함수 1 - 선언적 함수 사용하기
function p221CallThreeTimes(callback) {
	for (let i = 0; i < 3; i++) {
		callback(i);
	}
}

function p221print(i) {
	console.log(`${i}번째 함수 호출`);
}

// p.222 콜백 함수 2 - 익명 함수 사용하기
p221CallThreeTimes(function (i) {
	console.log(`${i}번째 함수 호출`);
});

// p.223 배열의 forEach() 메소드
let numbers = [273, 52, 103, 32, 57];
numbers.forEach(function (value, index, array) {
	console.log(`${index}번째 요소 : ${value}`);
});

// p.223 배열의 map()
let numbersMap = numbers.map(function (value) {
	return value * value;
});
// numbersMap.forEach(console.log);

// p.224 배열의 filter()
numbers = [0, 1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(function (value) {
	return value % 2 === 0;
});

console.log(`원래 배열 : ${numbers}`);
console.log(`짝수만 추출 : ${evenNumbers}`);

// p.226 배열의 메소드와 화살표 함수
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let methodChaining = numbers
	.filter(value => value % 2 === 0)
	.map(value => value * value)
	.forEach(value => console.log(value));

// p.227 타이머 걸기
function p227TimerFn() {
	setTimeout(() => {
		console.log('1초 후에 실행됩니다.');
	}, 1 * 1000);

	let count = 0;
	setInterval(() => {
		console.log(`1초마다 실행됩니다 (${count}번째)`);
		count++;
	}, 1 * 1000);
}

// P.228 타이머 취소하기
function p228ClearTimer() {
	let id;
	let count = 0;
	id = setInterval(() => {
		console.log(`1초마다 실행됩니다 (${count}번째)`);
		count++;
	}, 1 * 1000);

	setTimeout(() => {
		console.log('타이머를 종료합니다.');
		clearInterval(id);
	}, 5 * 1000);
}

// p. 230 이중 충돌 문제 발생
let pi = 3.14;
console.log(`파이 값은 ${pi}입니다.`); // 파이 값은 3.14 입니다.

// 블록 사용해 스코프 생성
{
	let pi = 3.141592;
	console.log(`중괄호 블록 내 파이 값은 ${pi}입니다.`); // 중괄호 블록 내 파이 값은 3.141592 입니다.
}

// 함수 블록으로 스코프 생성
function fnBlock() {
	let pi = 3.1415;
	console.log(`함수 블록 내 파이 값은 ${pi}입니다.`);
}
fnBlock(); // 함수 블록 내 파이 값은 3.1415 입니다.
console.log(`파이 값은 ${pi}입니다.`); // 파이 값은 3.14 입니다.

// p.232 즉시 호출 함수를 사용한 문제 해결
(function () {
	let pi = 3.14159;
	console.log(`즉시 호출 함수 블록 내 파이 값은 ${pi}입니다.`); //즉시 호출 함수 블록 내 파이 값은 3.14159입니다.
})();

// p.235 익명 함수 호출
let anonymousFn;

anonymousFn = function () {
	console.log('1번째 익명 함수입니다');
};

anonymousFn = function () {
	console.log('2번째 익명 함수입니다');
};

// anonymousFn();

// p.236 선언적 함수 호출
// declarativeFn(); // 2번째 익명 함수입니다

function declarativeFn() {
	console.log('1번째 선언적 함수입니다');
}

function declarativeFn() {
	console.log('2번째 선언적 함수입니다');
}

// p.237 선언적 함수와 익명 함수의 조합
fn = function () {
	console.log('익명 함수입니다.');
};

function fn() {
	console.log('선언적 함수입니다.');
}

// fn(); // 익명 함수입니다.

// p.238 블록이 다른 경우 선언적 함수의 사용
declarative();

function declarative() {
	console.log('1번째 선언적 함수');
}

// p.239 let 사용의 의미
let p239fn = function () {
	console.log('익명 함수');
};

function p239fn() {
	console.log('선언적 함수');
}

// p239fn(); // Uncaught SyntaxError: Identifier 'p239Fn' has already been declared
