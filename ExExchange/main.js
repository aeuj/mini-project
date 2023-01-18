    // 더보기 버튼 눌렀을 때 ajax 요청
    // $('#more').click(function(){
    //   $.get('https://codingapple1.github.io/js/more1.json ')
    //   .done((data)=>{
    //     console.log(data);

let currencyRatio = {
  USD: {
    KRW: 1184.36,
    USD: 1,
    VND: 22972.50,
    unit: "달러"
  },
  KRW: {
    KRW: 1,
    USD: 0.00084,
    VND: 19.40,
    unit: "원"
  },
  VND: {
    KRW: 0.052,
    USD: 0.000044,
    VND: 1,
    unit: "동"
  }
};

// console.log(currencyRatio.USD.unit);
// console.log(currencyRatio['VND']['unit']);

let fromCurrency = 'USD';
let toCurrency = 'USD';

  document.querySelectorAll('#from-currency-list a').forEach((menu) =>
    menu.addEventListener('click', function(){
    // 1. 버튼을 가져온다
    // 2. 버튼에 값을 바꾼다
    document.getElementById('from-button').textContent = this.textContent;

    // 3. 선택된 currency값을 변수에 저장해준다
    fromCurrency = this.textContent;
    console.log("fromCurrency는", fromCurrency);

    // 값이 바뀔때마다 다시 바뀐다.
    convert()
  })
);


document.querySelectorAll('#to-currency-list a').forEach((menu) =>
menu.addEventListener('click', function(){
  document.getElementById('to-button').textContent = this.textContent;

  toCurrency = this.textContent;
  console.log("toCurrency는", toCurrency);

  // 값이 바뀔때마다 다시 바뀐다.
  convert()
})
);

// 1. 키를 입력하는 순간
// 2. 환전이 된다
// 3. 환전된 값이 보이게 된다

function convert(){
  // 환전
  // 환전할 값 -> 가진 화폐의 종료 -> 바꾸고자 하는 화폐
  // 돈 * 환율 = 환전금액
  let amount = document.getElementById('from-input').value;
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
  console.log(convertedAmount);

  document.getElementById('to-input').value = convertedAmount;
}



// 추가할 것
// 1. 밑의 박스의 숫자를 바뀌도 위의 박스에 환율이 적용되게 (현재는 위에서 밑만 가능)
// 2. 숫자를 한국어로 읽는 법 (국가화폐단위마다 다르게 만들기)
// 3. css 로 꾸며주기

// 다 한 후에는
// api를 적용해서 매일 매일 다른 환율로 받아오기