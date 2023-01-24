// 수정버튼 만들기
// http://erunjoy.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-replace-%EB%AC%B8%EC%9E%90-%EB%AA%A8%EB%91%90-%EB%B0%94%EA%BE%B8%EA%B8%B0-%EC%98%88%EC%A0%9C%EC%8B%A4%EC%8A%B5
// 주소를 참고하려고 했는데 이번에 참고를 안해서 다음에 참고해보기
// 콘솔창
// "수정해볼까요".replace("수정해볼까요", "하세요");
// 결과 => "하세요"
const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');
var i = 1;

                      
                    
button.addEventListener('click', function(){
  
  const li = document.createElement('li');
  const editBtn = document.createElement('button');
  const delBtn = document.createElement('button');
  
  li.innerText = input.value;
  editBtn.innerText = '수정';
  delBtn.innerText = '삭제';
  
  ul.appendChild(li);
  li.appendChild(editBtn);
  li.appendChild(delBtn);
  

    editBtn.addEventListener('click', function(){
      const liInput = document.createElement('input');
      const liBtn = document.createElement('button');
      
      liBtn.innerText = '확인';
      li.appendChild(liInput);
      li.appendChild(liBtn);
      
      // 새로생긴 input에 입력하고 확인버튼을 누르면 
      // main input창의 값이 바뀐다
      liBtn.addEventListener('click', function(){
        li.innerText = liInput.value;
      })
      })
  
    delBtn.addEventListener('click', function(){
      const target = event.target.parentElement;
      target.remove();

    
})
    input.value = '';
})

