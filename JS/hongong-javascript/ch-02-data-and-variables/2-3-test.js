/*
  문자열 입력 받기
  const input = prompt('메시지를 입력하세요', '_default');
  alert(input);
*/

/*
  불리언 입력 받기
  const input = confirm('Say yes?');
	alert(input); 
*/
/*
  숫자로 변환하기
  console.log(typeof ('52' - 0)); // number
  console.log(typeof (true - 0)); // number
*/

// 인치 -> 센티미터
function inchToCm() {
	const rawInput = checkInput(prompt('inch 단위의 숫자를 입력해주세요.'));
	if (!rawInput) return;
	const inch = checkInput(rawInput);
	const cm = inch * 2.54;
	alert(`${inch}inch는 ${cm}cm 입니다.`);
}

// 센티미터 -> 인치
function cmToInch() {
	const rawInput = checkInput(prompt('cm 단위의 숫자를 입력해주세요.'));
	if (!rawInput) {
		return;
	}
	const cm = checkInput(rawInput);
	const inch = cm * 0.393701;
	alert(`${cm}cm는 ${inch}inch 입니다.`);
}

// 반지름 -> 원의 넓이, 둘레
function getCircleInfo() {
	const rawInput = checkInput(prompt('원의 반지름을 입력해주세요'));
	if (!rawInput) {
		return;
	}
	const radius = checkInput(rawInput);
	const area = radius * radius * 3.14;
	const circumference = radius * 2 * 3.14;
	alert(`이 원의 넓이는 ${area}, 둘레는 ${circumference}입니다`);
}

// 달러 -> 원화
function exchangeUsdToKrw() {
	const rawInput = checkInput(prompt('달러(USD)를 입력해주세요.'));
	if (!rawInput) {
		return;
	}
	const dollar = Number(rawInput);
	const won = dollar * 1207;
	alert(`원화(KRW) : ${won}원`);
}

// input 값을 받아서 false이면 프로세스 종료 아니면 Number(input) 값 내주기
function checkInput(input) {
	const numberValue = Number(input);
	if (!Boolean(numberValue)) {
		alert('올바른 값을 입력해주세요');
		return false;
	} else {
		return numberValue;
	}
}
