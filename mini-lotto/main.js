const numbersDiv = document.querySelector('.numbers');
const drawBtn = document.querySelector('#draw');
const resetBtn = document.querySelector('#reset');

const lottoNums = [];
const colors = ["#3CAEFF", "#78E150", "#FF8200", "#FF5050", "#A814E7"];

function paintNum(number){
  const eachNumDiv = document.createElement('div');

  // 10단위씩 색을 다르게 해줌
  let colorIndex = Math.floor(number / 10);
  colors[colorIndex];
  eachNumDiv.style.backgroundColor = colors[colorIndex];

  eachNumDiv.classList.add('eachNum');
  eachNumDiv.textContent = number;
  numbersDiv.appendChild(eachNumDiv);
}

drawBtn.addEventListener('click', function(){
  // while문을 선택한 이유 => 반복 ( 6개의 숫자가 뽑힐때까지 반복)
  while(lottoNums.length < 6){
    let ran = Math.floor(Math.random() * 45) + 1
    // indexOf는 주어진값이 배열에 몇번인덱스에 존재하는지 반환
    // 배열에 존재하지 않으면 -1을 반환하여 push로 추가한다는 뜻
    // 이 부분이 중복해결부분이기도 함
    if(lottoNums.indexOf(ran) === -1){
      lottoNums.push(ran);
      // 함수를 만들어서 추가가 될 때마다 실행되게
      paintNum(ran);
    }
  }
})

resetBtn.addEventListener('click', function(){
  numbersDiv.innerHTML = '';
  // 0번부터 6번까지의 index를 지우기
  lottoNums.splice(0,6);
})


// 버튼 색 주기
var draw = document.getElementById("draw", "reset");

setInterval(function(){
	var color = Math.random()*0xffffff;
	color = parseInt(color);
	color = color.toString(16);
	
	draw.style.background = "#" + color;
	reset.style.background = "#" + color;
	
},300);