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
