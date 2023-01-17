console.log("자바스크립트 파일을 html로 로드하였음");

function handelSingleClick(e){
  const singleItem = document.getElementById(e.id);
  singleItem.classList.toggle("mystyle");
}

function handleUpdate(e){
  const 
}

function addItem(){
  console.log("addItem 실행");
  const itemInput = document.getElementById("item-input");
  const content = itemInput.value;
  if(content){
    console.log("컨텐트가 있는 경우");
    const myList = document.getElementById("my-list");
    console.log(myList.getElementsByTagName("li").length) + 1;

    const newList = document.createElement('li');

    const newText = document.createElement('p');
    newText.innerText = content;
    newText.setAttribute("onclick", "handelSingleClick(this)");
    newText.setAttribute("id", `${list_number}th-item`);
    newList.appendChild(newText);

    // 버튼 추가
    const updateButton = document.createElement('button');
    updateButton.innerHTML = "수정";
    updateButton.setAttribute("onclick", "handleUpdate(this)");
    // id값 주기
    updateButton.setAttribute("id", `${list_number}th-item-update-button`);
    newList.appendChild(updateButton);

    myList.append(newList)

    itemInput.value = "";
  
  
  }else{
    console.log("컨텐트가 없는 경우");
    alert("값을 입력해")
  }
}