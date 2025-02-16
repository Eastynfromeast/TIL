// p.249 메소드 내부에서 this 키워드
const son249 = {
	name: '누리누',
	eat: function (food) {
		alert(this.name + '은/는 ' + food + '을/를 먹습니다');
	},
};

// son.eat('딸기');

// p.250 동적으로 객체 속성 추가하기
const son250 = {};
son250.name = 'Nuri';
son250.hobby = 'walking';
son250.professsion = 'home protector';

console.log(JSON.stringify(son250, null, 2));

// p.250 동적으로 객체 속성 제거
delete son250.professsion;
console.log(JSON.stringify(son250, null, 2));
/**
{
  "name": "Nuri",
  "hobby": "walking"
}
*/

// p.251 메소드 선언 구문
const son251 = {
	name: '누리누',
	eat(food) {
		alert(this.name + '은/는 ' + food + '을/를 먹습니다');
	},
};

// p.252 this 키워드의 차이
const test252 = {
	fnA: function () {
		console.log(this);
	},
	fnB: () => {
		console.log(this);
	},
};

test252.fnA(); // {fnA: ƒ, fnB: ƒ}
test252.fnB(); // Window {window: Window, self: Window, document: document, name : '', location: Location,...}
