const plate = document.querySelector('#plate')
const scoreConten = document.querySelector('.score')
const timerElement = document.getElementById('second')
let score = 0
let level = 1
let gameTimer;
var agin = document.querySelector('.agin')


function getCSS(level) {
	let levelform = level 
	let mole = 485 - 15 * levelform
	let deno = 1 + levelform
	return mole / deno
}
//getCSS(1)=242.5px
//重製色塊
function reset() {
	score = score +1 ;
	scoreConten.innerHTML = score;
	let side = getCSS(level)
	// console.log(level,side);
	//清清空boxes
	var r= Math.floor(Math.random()*255);
	var g= Math.floor(Math.random()*255);
	var b = Math.floor(Math.random()*255);
 let rendomNumber = Math.floor(Math.random() * (level+1)*(level+1))

	plate.innerHTML = ''
	//生成4個box
	
	console.log(level);
	for (let i = 0; i < (level+1)*(level+1); i++) {
		if (i == rendomNumber) {
			plate.innerHTML += `
			<div class="box answer" onclick="reset()" style="width:${side}px;height:${side}px;background-color:rgb(${r},${g},${b});"  ></div>
			`

		}
		else {
			plate.innerHTML += `
			<div class="box"   style="width:${side}px; height:${side}px ;background-color:rgb(${r},${g},${b}); 
			" ></div>
			`}




	}
	//撈出我們4個box
	// const boxes = document.querySelectorAll('.box')
	// console.log(boxes)
	//骰骰子 取的0~3亂數
	//加入答案
	// boxes.forEach(function (box, index) {
		
	// 	if (index == randomnumber) {
	// 		box.classList.add('answer')
	// 	}
	// })
	// boxes.forEach(function (box) {
	// 	box.addEventListener('click', function () {
	// 		if (box.classList.contains('answer')) {
	// 			reset()
	// 		}
	// 	})
	// })
	if(score %3 ==0){
		
	if(level<=7){
		level++
	}
	}

}
const startGame = document.querySelector('.start-game')


const time = document.querySelector('.time')

startGame.addEventListener('click', function () {
	plate.classList.add('act')
	scoreConten.classList.add('act')
	// agin.classList.add('agin-1')
	startGame.style.display = 'none'

	time.style.display = 'flex'
	timerElement.innerText = 10;
	score = 0;
	gameTimer = setInterval(function () {
		console.log(timerElement.innerText);
		
		if(timerElement.innerText == '0'){
			alert('遊戲結束!!!')
			clearInterval(gameTimer)
			plate.classList.remove('act')
			timerElement.innerText = 1
			// startGame.innerHTML = 'again'
			startGame.style.display = 'block'
			agin.classList.remove('agin-1')
		}
		timerElement.innerText = parseInt(timerElement.innerText) - 1
	}, 1000);

})
agin.addEventListener('click', function(){
	reset()
	plate.classList.add('act')
	
	
})
reset()

