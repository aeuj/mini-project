// 변수 만들기
const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');

// 변수에 배열 담기
// 변수에 담고 random 함수에 index 0~2로 사용할 것임
const result = ['가위', '바위', '보'];

// 창에 띄우기
const show = (user, computer, result) =>{
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = result;
} 

const game = (user, computer) =>{

  let message;
// if문과 swich문 사용
  if(user === computer){
    message = '무승부!';
  }else{
    switch(user + computer){
      case '가위보':
      case '바위가위':
      case '보가위':
        message = '사용자 승리!';
        break;
      case '가위바위':
      case '바위보':
      case '보가위':
        message = '컴퓨터 승리!'
        break;  
    };
  };
  show(user, computer, message);
};

// 클릭 할 때마다
// 1. 사용자가 선택한 값
// 2. 컴퓨터가 랜덤으로 정한 값
// 알아야 하기 때문에 user, computer 만든다
// result 배열에 randomIndex를 만들어서 0~2값을 찾아야하기 때문에 3을 곱한다
const play = (event) =>{
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
}

// 시작
// 각 버튼에 클릭 이벤트를 건다
buttons.forEach((button)=>{
  button.addEventListener('click', play)
});


