// 현재 시작에 따라 오전과 오후 구분하기
const date = new Date();
const hour = date.getHours();

/* if 
if (hour < 12) {
	alert('오전입니다.');
}

if (hour >= 12) {
	alert('오후입니다.');
} */

/* if-else
if (hour < 12) {
	alert('오전입니다.');
} else {
	alert('오후입니다.');
}
 */

/* 중첩 조건문
if (hour < 11) {
	alert('아침을 먹을 시간입니다.');
} else {
	if (hour < 15) {
		alert('점심을 먹을 시간입니다.');
	} else {
		alert('저녁을 먹을 시간입니다');
	}
} */

/* if-else-if
if (hour < 11) {
	alert('아침을 먹을 시간입니다.');
} else if (hour < 15) {
	alert('점심을 먹을 시간입니다.');
} else {
	alert('저녁을 먹을 시간입니다');
} */

function checkIsNaN(input) {
	if (Number.isNaN(input)) {
		alert('숫자를 입력해주세요');
	}
	return Number.isNaN(input);
}

function compareTwoNumbers() {
	const firstNum = Number(prompt('첫 번째 숫자', ''));
	const secondNum = Number(prompt('두 번째 숫자', ''));

	if (checkIsNaN(firstNum) || checkIsNaN(secondNum)) {
		alert('숫자만 입력 가능합니다.');
		return;
	}

	if (firstNum > secondNum) {
		alert('첫 번째로 입력한 숫자가 더 큽니다.');
	} else if (firstNum === secondNum) {
		alert('두 숫자가 같습니다');
	} else {
		alert('두 번째로 입력한 숫자가 더 큽니다.');
	}
}

function doHomework(x) {
	if (x > 10 && x < 20) {
		console.log(`입력하신 값 ${x} 은/는 조건에 맞습니다.`);
	} else {
		console.log(`입력하신 값 ${x} 은/는 조건에 맞지 않습니다.`);
	}
}
