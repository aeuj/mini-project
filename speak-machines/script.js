// Speech API
const speechContent = window.speechSynthesis;

// DOM
const inputText = document.querySelector('#input-text');
const speakButton = document.querySelector('#speak-button');

speak()
// 액션, function(){}, ()=>{}
speakButton.addEventListener('click', () => {
  speak(inputText.value)
});

function speak(text = 'hello'){
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'ko-KR'
  // 말 속도
  speech.rate = 1
  speechContent.speak(speech, true)
}
