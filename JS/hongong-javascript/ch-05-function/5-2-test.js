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
const numbers = [273, 52, 103, 32, 57];
numbers.forEach(function (value, index, array) {
	console.log(`${index}번째 요소 : ${value}`);
});
