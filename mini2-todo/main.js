const todos = document.querySelector('#todo-list');
const button = document.querySelector('.submit');
const todoInput = document.querySelector('#todo-input');
const msg = document.querySelector('#msg');

button.addEventListener('click', onSubmit)
  function onSubmit(e){
    e.preventDefault();
//     공백일 시 입력되지 않게 함
    if(todoInput.value === ''){
      msg.style.display = 'block';
      // 1초 후에 경고문구가 사라지게 함
      setTimeout(()=> {msg.style.display ='none'}, 1000)
      return;
    }
    
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');

    // 2가지 방법 다 됨.
    // li.innerText = todoInput.value;
    li.appendChild(document.createTextNode(todoInput.value));

    li.classList.add('item');
    delBtn.classList.add('delBtn');
    delBtn.innerText = '삭제';
    todos.appendChild(li);
    li.appendChild(delBtn);

    // 삭제하기
    delBtn.addEventListener('click', function(){
      const target = event.target.parentElement;
      target.remove();
    });

    todoInput.value = '';
  }