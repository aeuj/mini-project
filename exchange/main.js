    // 더보기 버튼 눌렀을 때 ajax 요청
    // $('#more').click(function(){
    //   $.get('https://codingapple1.github.io/js/more1.json ')
    //   .done((data)=>{
    //     console.log(data);


    //     data.forEach((a, i)=>{
    //       var 템플릿 = `
    //       <div class="col-sm-4">
    //         <img src="https://via.placeholder.com/600" class="w-100">
    //         <h5>${data[i].title}</h5>
    //         <p>가격 : ${data[i].price}</p>
    //       </div>`;
    //       $('.row').append(템플릿);
    //     })
    //   })


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
  })
);


document.querySelectorAll('#to-currency-list a').forEach((menu) =>
menu.addEventListener('click', function(){
  document.getElementById('to-button').textContent = this.textContent;

  toCurrency = this.textContent;
  console.log("toCurrency는", toCurrency);
}))