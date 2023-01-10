// 디지털 시계
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function clockBox(){
  
  const clock = new Date();

  hour.innerText = clock.getHours();
  min.innerText = clock.getMinutes();
  sec.innerText = clock.getSeconds();

  // 삼항연산자로 한자리 수 일때 앞에 0 추가하려고 했는데 아직 잘 안됨
  // sec = sec < 10 ? `0${sec}` : sec

}
// 새로고침을 해도 바로 불러오게 (setInterval이 1초라서 1초가 없어지는 그 순간이 없게 만들어줌) 
clockBox(); 
setInterval(clockBox, 1000);

// 디지털 달력

function calendar() {
  let Thisyear = document.querySelector('.Thisyear');
  let Thismonth = document.querySelector('.Thismonth');
  let Thisday = document.querySelector('.Thisday');
  let ThisWeek = document.querySelector('.ThisWeek');

  var myDay = new Date();

  var year = myDay.getFullYear();
  var month = myDay.getMonth();
  var date = myDay.getDate();
  var day = myDay.getDay();
  var week = ['일', '월', '화', '수', '목', '금', '토'];

  
  Thisyear.innerText = myDay.getFullYear();
  Thismonth.innerText = (myDay.getMonth()+1); // 반환값이 0~11이기 때문에
  Thisday.innerText = myDay.getDate();
  ThisWeek.innerText = week[day];

}

calendar();

// todolist
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

// 1- 입력하고 새로고침 안되게 막기
// 2- 입력하고 창에 뜨게 만들기
// 2- 1 그러기 위해선 li를 추가해서 글을 쓸 수 있게 하기
// 2- 1 버튼을 추가하기 
// 3 삭제가 되게 만들기

const delItem = ()=> {
  const target = event.target.parentElement;
  target.remove();
}

form.addEventListener('submit', (event)=>{
  event.preventDefault();

  if(input.value != ''){
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span')

    // li.innerText = input.value;
    li.innerText = input.value;
    button.innerText = 'Delete';
    button.addEventListener('click', delItem)

    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);

    input.value ='';
  }
});


