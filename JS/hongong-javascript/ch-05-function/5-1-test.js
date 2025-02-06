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

// p.212 기본 매개변수의 활용
function earnings(name, wage = 8590, hours = 40) {
	console.log(`# ${name} 님의 급여 정보 `);
	console.log(`- 시급 : ${wage}원`);
	console.log(`- 근무 시간 : ${hours}시간 `);
	console.log(`- 급여 : ${wage * hours}원`);
	console.log('');
}
// 최저 시급
earnings('구름');

// 시급 1만원으로 기본 시간을 일하는 경우
earnings('별', 10000);

// 시급 1만원으로 주 52시간 근무할 경우
earnings('사랑', 10000, 52);

// p.213 기본 매개변수를 추가한 윤년 함수
function p213IsLeapYear(year = new Date().getFullYear()) {
	console.log(`매개변수 year : ${year}`);
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(`올해는 윤년일까? === ${p213IsLeapYear()}`);

// p.214 arguments를 사용한 가변 매개변수 함수
function getArguments() {
	console.log(arguments);
	for (let i = 0; i < arguments.length; i++) {
		console.log(`${i}번째 요소 : ${arguments[i]}`);
	}
}

getArguments(1, 2);
// Arguments(2) [1,2 callee:f, Symbol(Symbol.iterator) : f]
// 0번째 요소 : 1
// 1번째 요소 : 2

// p.215 전개 연산자가 없던 구 버전에서 apply() 함수 사용하기
function p215Apply(...items) {
	console.log(items);
}

const arrayA = [1, 2, 3, 4];
console.log(p215Apply.apply(null, arrayA));

// p.216 구 버전 JS에서 기본 매개변수 구하기
function p216getEarning(wage, hours) {
	wage = typeof wage != undefined ? wage : 8590;
	hours = typeof hours !== undefined ? hours : 52;
	return wage * hours;
}

/*
  확인 문제
*/
// 1. A부터 B까지 범위를 지정했을 떄 범위 안의 숫자를 모두 곱하는 함수를 만들어보세요
function mulitplyAll(a, b) {
	let output = a;
	for (let i = a; i <= b; i++) {
		output = output * i;
	}
	return output;
}

console.log(mulitplyAll(1, 2)); // 2
console.log(mulitplyAll(1, 3)); // 6

// 2. 다음 과정에 따라 최대값을 찾는 max() 함수를 만드세요
// 매개변수 [1,2,3,4]
const getMax218 = function (array) {
	let output = array[0];
	for (const item of array) {
		if (output <= item) {
			output = item;
		}
	}
	return output;
};

console.log(`매개변수 [1,2,3,4]: ${getMax218([1, 2, 3, 4])}`);

// 매개변수 getMax219(1,2,3,4)

const getMax219 = function (...items) {
	let output = items[0];
	for (const item of items) {
		if (output <= item) {
			output = item;
		}
	}
	return output;
};

console.log(`매개변수 (1,2,3,4) : ${getMax219(1, 2, 3, 4)}`);

// 위의 두 형태를 모두 입력할 수 있는 getMaxAllType()
const getMaxAllType = function (first, ...rests) {
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
		if (output < item) {
			output = item;
		}
	}

	return output;
};

console.log(`max(배열) : ${getMaxAllType([1, 2, 3, 4])}`);
console.log(`max(...숫자) : ${getMaxAllType(1, 2, 3, 4)}`);
