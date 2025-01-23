// 현재 시작에 따라 오전과 오후 구분하기
/* const date = new Date();
const hour = date.getHours(); */

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
		alert('숫자만 입력해주세요!');
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

function checkIsPositiveNumber() {
	const input = Number(prompt('숫자를 입력하세요', ''));

	if (checkIsNaN(input)) {
		return;
	}

	if (input > 0) {
		alert('입력한 숫자는 양수입니다.');
	} else if (input === 0) {
		alert('입력한 숫자는 0입니다.');
	} else {
		alert('입력한 숫자는 음수입니다.');
	}
}

function checkIsEvenNumber() {
	const input = Number(prompt('숫자를 입력하세요', ''));

	if (checkIsNaN(input)) {
		return;
	}

	if (input % 2 === 0) {
		alert('입력한 숫자는 짝수입니다.');
	} else {
		alert('입력한 숫자는 홀수입니다.');
	}
}

function checkMonthsSeason() {
	const input = prompt('월을 입력하세요', '');
	const spring = ['3', '4', '5'];
	const summer = ['6', '7', '8'];
	const autumn = ['9', '10', '11'];
	const winter = ['12', '1', '2'];

	if (spring.includes(input)) {
		alert('봄입니다.');
	} else if (summer.includes(input)) {
		alert('여름입니다.');
	} else if (autumn.includes(input)) {
		alert('가을입니다.');
	} else if (winter.includes(input)) {
		alert('겨울입니다.');
	} else {
		alert('1월에서 12월까지만 입력 가능합니다.');
	}
}

function learnSwitch() {
	const input = Number(prompt('숫자를 입력하세요.', '숫자'));

	switch (input % 2) {
		case 0:
			alert('짝수입니다.');
			break;
		case 1:
			alert('홀수입니다.');
			break;
		default:
			alert('숫자가 아닙니다.');
			break;
	}
}

/* const date = new Date();
const hour = date.getHours();

switch (true) {
	case hour < 11:
		alert('아침을 먹을 시간입니다.');
		break;

	case hour < 15:
		alert('점심을 먹을 시간입니다.');
		break;

	default:
		alert('저녁을 먹을 시간입니다.');
		break;
} */

function learnConditionalOperator() {
	const input = Number(prompt('숫자를 입력하세요.', '숫자'));
	const result = input >= 0 ? '0 이상의 숫자입니다' : '0보다 작은 숫자입니다';
	alert(result);
}

// 148p if-else 조건문으로 짝수 홀수 구분하기
function checkIsEvenNumberWithIfElse() {
	const input = prompt('정수를 입력해주세요.', '');
	const end = input[input.length - 1];
	if (end === '0' || end === '2' || end === '4' || end === '6' || end === '8') {
		alert(`${input}은 짝수입니다.`);
	} else {
		alert(`${input}은 홀수입니다.`);
	}
}

// 149p if-else 조건문으로 짝수 홀수 구분하기 2
function checkIsEvenNumberWithIfElse2() {
	const input = prompt('정수를 입력해주세요.', '');
	const number = Number(input);

	if (number % 2 === 0) {
		alert(`${input}은 짝수입니다.`);
	} else {
		alert(`${input}은 홀수입니다.`);
	}
}

// 150p 학점 기반으로 별명 붙여주기
function nameAsGPA() {
	const score = Number(prompt('학점을 입력해주세요', 'ex) 3.8'));
	if (score === 4.5) {
		alert('신');
	} else if (4.2 <= score) {
		alert('교수님의 사랑');
	} else if (3.5 <= score) {
		alert('현 체제의 수호자');
	} else if (2.8 <= score) {
		alert('일반인');
	} else if (2.3 <= score) {
		alert('일탈을 꿈꾸는 소시민');
	} else if (1.75 <= score) {
		alert('오락문화의 선구자');
	} else if (1.0 <= score) {
		alert('불가축천민');
	} else if (0.5 <= score) {
		alert('자벌레');
	} else if (0 < score) {
		alert('플랑크톤');
	} else {
		alert('시대를 앞서가는 혁명의 씨앗');
	}
}

// 153p split으로 문자열 잘라 사용하기
function getTti() {
	const rawInput = prompt('태어난 해를 입력해주세요.', '');
	const year = Number(rawInput);
	const tti = '원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'.split(',');
	alert(`${year}년에 태어났다면 ${tti[year % 12]}띠입니다.`);
}

// 마무리 문제
function p154Q1() {
	const result = 100 > 200 ? prompt('값을 입력해주세요', '') : confirm('버튼을 클릭해주세요'); // confirm 실행됨
	alert(result);
}

// 태어난 연도 받아 띠 출력하기 switch
function p155Q2() {
	const rawInput = prompt('태어난 해를 입력해주세요.', '');
	const year = Number(rawInput);
	const e = year % 12;
	let result;
	switch (e) {
		case 0:
			result = '원숭이';
			break;
		case 1:
			result = '닭';
			break;
		case 2:
			result = '개';
			break;
		case 3:
			result = '돼지';
			break;
		case 4:
			result = '쥐';
			break;
		case 5:
			result = '소';
			break;
		case 6:
			result = '호랑이';
			break;
		case 7:
			result = '토끼';
			break;
		case 8:
			result = '용';
			break;
		case 9:
			result = '뱀';
			break;
		case 10:
			result = '말';
			break;
		case 11:
			result = '양';
			break;
		default:
			alert('숫자만 입력해주세요');
			break;
	}
	if (result !== undefined) {
		alert(`${year}년에 태어났다면 ${result}띠입니다.`);
	} else {
		return;
	}
}
p155Q2();

// 60갑자 년도 알아내기
function p156Q3() {
	const rawInput = prompt('태어난 해를 입력해주세요.', '');
	const year = Number(rawInput);
	const e = year % 12;

	let gahn = '경,신,임,계,갑,을,병,정'.split(',');
	let tti = '신,유,술,해,자,축,인,묘,진,사,오,미'.split(',');
	alert(`${year}년은 ${gahn[year % 10]}${tti[year % 12]} 년입니다.`);
}
