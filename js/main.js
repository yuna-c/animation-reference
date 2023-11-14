//tab 구현
const main = document.querySelector('main');
const btns = main.querySelectorAll('li');
const boxs = main.querySelectorAll('article');
const tits = main.querySelectorAll('h1');

splitText(tits[0]); //인수로 전달되는 값은 'h1'문자가 아닌 h1 Dom자체를 전달
splitText(tits[1]);

// 변수값 not defind
// console.log(btns);
// console.log(boxs);

btns.forEach((btn, idx) => {
	// console.log(btn);
	// console.log(idx);

	btn.addEventListener('click', () => {
		/*
		btns.forEach((btn) => btn.classList.remove('on'));
		btns[idx].classList.add('on');

		boxs.forEach((btn) => btn.classList.remove('on'));
		boxs[idx].classList.add('on');
    */

		activation(btns, idx);
		activation(boxs, idx);
	});
});

function activation(arr, idx) {
	arr.forEach((el) => el.classList.remove('on'));
	arr[idx].classList.add('on');
}

// 해당함수는 DOM자체를 인수로 전달받음
function splitText(el) {
	//const dom = document.querySelector(el); //문자열 들어가야 DOM에서 바로 찾을 수 있게
	// 전달된 dom 이 innerhtml로 받아지게
	let tags = '';

	for (let letter of el.innerText) {
		tags += `<span>${letter}</span>`;
	}
	console.log(tags);
	el.innerHTML = tags;
}
