// p.197 익명함수 선언
const functionAnonymous = function () {
	console.log('함수 내부의 코드입니다 ... 1');
	console.log('함수 내부의 코드입니다 ... 2');
	console.log('함수 내부의 코드입니다 ... 3');
	console.log(' ');

	console.log(typeof functionAnonymous); // function
	console.log(functionAnonymous); // f (){...
};

// p.199 선언적 함수
function functionWithName() {
	console.log('함수 내부의 코드입니다 ... 1');
	console.log('함수 내부의 코드입니다 ... 2');
	console.log('함수 내부의 코드입니다 ... 3');
	console.log(' ');

	console.log(typeof functionWithName); // function
	console.log(functionWithName); // f functionWithName(){ ...
}

// p.201 기본 형태 함수 만들기
function f(x) {
	return x * x;
}

// p.203 윤년 확인 함수
function isLeapYear(year) {
	let answer = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? '윤년입니다.' : '윤년이 아닙니다.';
	return year + '년은 ' + answer;
}

// p.204 a부터 b까지 더하기
function sumAll(a, b) {
	let output = 0;
	for (let i = a; i <= b; i++) {
		output += i;
	}
	return output;
}

// p.204 a부터 b까지 곱하기
function multipleAll(a, b) {
	let output = a;
	for (let i = a; i <= b; i++) {
		output = output * i;
	}
	return output;
}

// p.205 최솟값 구하기
function getMin(array) {
	let output = array[0];
	for (const item of array) {
		if (output > item) {
			output = item;
		}
	}
	return output;
}

// p.205 최댓값 구하기
function getMax(array) {
	let output = array[0];
	for (const item of array) {
		if (output <= item) {
			output = item;
		}
	}
	return output;
}

const testArray = [52, 273, 32, 103, 275, 24, 57];
console.log(`${testArray} 중에서 \n 최솟값 = ${getMin(testArray)}`);
console.log(`${testArray} 중에서 \n 최댓값 = ${getMax(testArray)}`);

// p.206 나머지 매개변수로 배열 만들기
function p206RestParameter(...items) {
	console.log(items);
}
// console.log(p206RestParameter(1, 2, 3)); // [1,2,3]

// P.207 나머지 매개변수를 사용한 getMin() 함수
function getMin2(...items) {
	let output = items[0];
	for (const item of items) {
		if (output > item) {
			output = item;
		}
	}
	return output;
}

// p.208 나머지 매개변수와 일반 매개변수를 갖는 함수
function p208(a, b, ...c) {
	console.log(a, b, c);
}

/*
p208(1, 2); // 1,2,[]
p208(1, 2, 3); // 1,2,[3]
p208(1, 2, 3, 4); // 1,2,[3,4]

*/

// p.209 매개변수의 자료형에 따라 다르게 작동하는 min()함수
function p209getMin(first, ...rests) {
	let output;
	let items;
	if (Array.isArray(first)) {
		output = first[0];
		items = first;
	} else if (typeof first === 'number') {
		output = first;
		items = rests;
	}

	for (const item of items) {
		if (output > item) {
			output = item;
		}
	}

	return output;
}

// P.211 전개 연산자의 활용
function p211(...items) {
	console.log(items);
}
const array = [1, 2, 3, 4];

console.log('# 전개 연산자를 사용하지 않은 경우');
p211(array); // [Array(4)]

console.log('# 전개 연산자를 사용한 경우');
p211(...array); // (4) [1,2,3,4]
