// 사용변수 나열
const GAME_TIME = 4;
// 점수 생성
let score = 0;
// 시간 생성
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval; 
let words = [];
const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');
const gamePoint =  document.querySelector('.gamePoint');
const myPoint = document.querySelector('.myPoint');


init();
// 셋팅할 내용들 불러오기
function init(){
  buttonChange('게임 로딩 중...');
  // 메서드 호출해서 단어불러오기
  getWords()
  wordInput.addEventListener('input', checkMatch)
}


// 게임 실행
function run(){
   // 게임이 시작중이면 버튼을 클릭하더라도 시간의 변화가 없게
  if(isPlaying){
    return;
  }
  isPlaying = true;
   // 시간초기화
  time = GAME_TIME;
   // 게임버튼 클릭시 커서가 input창에 가게 하기
  wordInput.focus();
  scoreDisplay.innerText = 0;
  scoreDisplay.style.color = 'blue';
  timeInterval = setInterval(countDown, 1000);
  // 상태 체크
  checkInterval = setInterval(checkStatus, 50);
  buttonChange('게임 중..');
}


// 0초이면서 게임이 종료면 버튼이 게임시작으로 바뀜
function checkStatus(){
  if(!isPlaying && time === 0){
    buttonChange("게임시작");
    clearInterval(checkInterval);

    document.querySelector('.game-wrap').style.display = 'block';
    myPoint.innerHTML = score;
  }
}

// 단어 불러오기
function getWords(){
  // axios api
  axios.get('https://random-word-api.herokuapp.com/word?number=100')
  .then(function (response) {
     // 긴 단어 자르기
    response.data.forEach((word) => {
      if(word.length < 10){
        words.push(word);
      }
    });
    buttonChange('게임시작');
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}


  // 단어일치 체크
  function checkMatch(){
  // console.log(wordInput.value === wordDisplay.innerText);
  // toLowerCase()는 소문자
  // 입력 값과 맞다면 점수 1점 추가
  if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
    // input 창 단어 초기화
    wordInput.value = '';
    // 맞지 않으면 점수를 올리지 않고 돌려보냄..
    if(!isPlaying){
      return;
    }
    score++;
    scoreDisplay.innerText = score;
    time = GAME_TIME;
    // 단어 랜덤 업데이트
    const randomIndex  = Math.floor(Math.random() * words.length);
    wordDisplay.innerText = words[randomIndex];
    }
  }




function countDown(){
  // (조건) ? 참일경우 : 거짓일 경우
  time > 0 ? time-- : isPlaying = false;
  if(!isPlaying){
    clearInterval(timeInterval);
  }
   // 시간 보이게 하기
  timeDisplay.innerText = time;
  timeDisplay.style.color = 'red';
}
// 게임 버튼 텍스트
function buttonChange(text){
  button.innerText = text;
  // .loading class 탈부착으로 게임 버튼의 색을 다르게 함
  text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');
}

// 창닫기 누르면 Game Over 창 사라지게 하기
const gameWrap = document.querySelector('.game-wrap');
const gameOverBtn = document.querySelector('.gameOverBtn');

gameOverBtn.addEventListener('click', function(){
  gameWrap.style.display = 'none';
  scoreDisplay.innerHTML = '0';
})