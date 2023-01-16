const GAME_TIME = 3;
// 점수 생성
let score = 0;
// 시간 생성
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button')

wordInput.addEventListener('input', () => {
  // console.log(wordInput.value === wordDisplay.innerText);
  // toLowerCase()는 소문자
  // 입력 값과 맞다면 점수 1점 추가
  if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
    score++;
    scoreDisplay.innerText = score;
    // input 창 단어 초기화
    wordInput.value = '';
  }
});

buttonChange('게임시작');

function run(){
  isPlaying = true;
  // 시간초기화
  time = GAME_TIME;
  timeInterval = setInterval(countDown, 1000);
}


function countDown(){
  // (조건) ? 참일경우 : 거짓일 경우
  time > 0 ? time-- : isPlaying = false;
  if(!isPlaying){
    clearInterval(timeInterval);
  }
  // 시간 보이게 하기
  timeDisplay.innerText = time;
}

// 게임 버튼 텍스트
function buttonChange(text){
  button.innerText = text;
  // .loading class 탈부착으로 게임 버튼의 색을 다르게 함
  text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');
}

// 30분 50초