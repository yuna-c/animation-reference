/*
for of 반복문으로 문자마다 span으로 분리해주는 기능 구현
const h1 = document.querySelector('h1');
const txt = h1.innerText;
let tags = '';

//반복 : 배열,문자도 가능 ES6이후
for (let letter of txt) {
	//console.log(letter);
	tags += `<span>${letter}</span>`;
}
console.log(tags);
h1.innerHTML = tags;
*/

splitText('h1');
splitText('h2');
splitText('h3');
//미션 위의 내용을 처리해주는 함수 제작 (인수로 선택자 전달)
function splitText(el) {
	const dom = document.querySelector(el); //지역변수
	//const txt = dom.innerText;
	let tags = '';

	for (let letter of dom.innerText) {
		tags += `<span>${letter}</span>`;
	}
	console.log(tags);
	dom.innerHTML = tags;

	// 기능 실행은 return 필요 없어
}
