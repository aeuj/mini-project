const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

// 1- 입력하고 새로고침 안되게 막기
// 2- 입력하고 창에 뜨게 만들기
// 2- 1 그러기 위해선 li를 추가해서 글을 쓸 수 있게 하기
// 2- 1 버튼을 추가하기 
// 3 삭제가 되게 만들기

const del = () => {
  const target = event.target.parentElement;
  target.remove();
}

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  if(input.value > input.value.valueOf){ //공백으로 시작하면 안됨 -> 공백이여도 글자가 있으면 출력되게

    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    
    li.innerText = input.value;
    button.innerText = '삭제';
    button.addEventListener('click', del)

    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    
    input.value = '';
  }
});