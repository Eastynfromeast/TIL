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
