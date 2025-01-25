// p.175 for in 반복문
const todos = ['우유 구매', '업무 메일 확인하기', '필라테스 수업'];
function p175ForInLoop() {
	for (const index in todos) {
		let order = Number(index) + 1;
		console.log(`${order}번째 할 일 : ${todos[index]}`);
	}
}

// p.177 for...of loop
function p77ForOfLoop() {
	for (const todo of todos) {
		console.log(`오늘의 할 일 : ${todo}`);
	}
}

// p.178 for loop
function p178ForLoop() {
	for (let i = 0; i < 5; i++) {
		console.log(`${i}번째 반복입니다.`);
	}
}

// p.179 1부터 N까지 더하기
function p179For() {
	let output = 0;
	for (let i = 0; i <= 100; i++) {
		output += i;
	}
	console.log(`1~100까지의 숫자를 모두 더하면 ${output}입니다.`); //5050
}

// p.180 for loop and array
function p180ForWithArray() {
	for (let i = 0; i < todos.length; i++) {
		let order = Number(i) + 1;
		console.log(`${order}번째 할 일 : ${todos[i]}`);
	}
}

// p.180 reverse for
function p180ForReverse() {
	for (let i = todos.length - 1; i >= 0; i--) {
		let order = Number(i) + 1;
		console.log(`${order}번째 할 일 : ${todos[i]}`);
	}
}

// p.182 while 반복문 기본
function p182While() {
	let i = 0;
	while (confirm('계속 진행하시겠습니까?')) {
		alert(`${i}번째 반복입니다.`);
		i++;
	}
}

// p.183 while과 함께 배열 사용하기
function p183WhileWithArray() {
	let i = 0;
	const array = [1, 2, 3, 4, 5];
	while (i < array.length) {
		console.log(`${i} : ${array[i]}`);
		i++;
	}
}

// p.184 break 활용
function p184WhileAndBreak() {
	for (let i = 0; true; i++) {
		alert(i + `번째 반복문입니다.`);

		// 진행 여부 묻기
		const isContinue = confirm('계속 하시겠습니까?');
		if (!isContinue) {
			break;
		}
	}

	alert('프로그램 종료');
}

// p.185 continue
function p185Continue() {
	let output = 0;
	for (let i = 0; i <= 10; i++) {
		if (i % 2 === 1) {
			continue; // 홀수는 더하지 않음
		}
		output += i;
	}
	alert(output);
}

// p.187 중첩반복문 1 피라미드 만들기
function p187NestedLoop() {
	let output = '';
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < i; j++) {
			output += '*';
		}
		output += '\n';
	}
	console.log(output);
}

// p.189 중첩 반복문 2
function p189NestedLoop() {
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
}

// p.191 확인 문제 1
function p191Q1() {
	const array = ['사과', '배', '귤', '바나나'];
	console.log('# for...in 반복문');
	for (const i in array) {
		console.log(i); // index 숫자가 나옴 0,1,2,3
	}

	console.log('# for...of 반복문');
	for (const i of array) {
		console.log(i); // elm가 나올 것 '사과', '배', '귤', '바나나'
	}
}
// p.192 확인 문제 2
// TypeError: Assignment to constant variable
function p192Q2() {
	const array = [];
	// const 안 됨!
	for (const i = 0; i < 3; i++) {
		array.push((i + 1) * 3);
	}
	console.log(array);
}

// p.192 확인 문제 3
function p192Q3() {
	let output = 1;
	for (let i = 1; i <= 100; i++) {
		output *= i;
		i++;
	}
	console.log(`1~100의 숫자를 모두 곱하면 ${output}입니다.`); //1~100의 숫자를 모두 곱하면 2.7253921397507295e+78입니다.
}

// p.193 확인 문제 4
function p193Q4() {
	let output = '';
	const size = 5;
	for (let i = 0; i <= size * 2 - 1; i++) {
		// i가 5보다 작을 때
		if (i <= size) {
			for (let j = size; j > i; j--) {
				output += ' ';
			}
			for (let k = 0; k < 2 * i - 1; k++) {
				output += '*';
			}
		} else {
			// 6
			for (let j = 0; j < i - 5; j++) {
				output += ' ';
			}
			for (let k = 5; k > 2 * (i - 6) - 2; k--) {
				output += '*';
			}
		}
		output += '\n';
	}

	console.log(output);
}

p193Q4();

/*
for(let k=5; k > 0; k--){
console.log(2*k-3); 7 5 3 1
}

2 * i - 1

i=6 k=5
*=7
 2 * (i - 6) - 2 = -2


i=7 k=4
*=5

i=8 k=3

i=9 k=1

*/
