const btn = document.querySelector("#btn-translate");
// btn.innerText = "checking1";
const inputDiv = document.querySelector("#txt-input");
// inputDiv.innerText = "cj2";

const outputDiv = document.querySelector("#output-div");
const btnSpeak = document.querySelector("#btn-speak");
// outputDiv.innerText = "ddd";

// btn.addEventListener("click", () => {
//   // outputDiv.innerText = "falanadimaka" + inputDiv.value;
//   // console.log(outputDiv.innerText);

// });

let serverApi =
  "https://minionsapi.kuldeeprathore.repl.co/translate/minion.json";
function getTranslate(whatever) {
  return serverApi + "?" + "text= " + whatever;
}
// function clickHandler() {
//   let inputText = inputDiv.value;
//   // console.log(inputText);

//   fetch(getTranslate(inputText))
//     .then((response) => response.json())
//     .then((json) => {
//       let translatedText = json.contents.translated;
//       outputDiv.innerText = translatedText;
//     });
// }
// btn.addEventListener("click",clickHandler)
btn.addEventListener("click", () => {
  let inputText = inputDiv.value;
  // console.log(inputText);

  fetch(getTranslate(inputText))
    .then((response) => response.json())
    .then((json) => {
      let translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    });

  btnSpeak.addEventListener("click", () => {
    if ("speechSynthesis" in window) {
      var synthesis = window.speechSynthesis;

      // Get the first `en` language voice in the list
      var voice = synthesis.getVoices().filter(function (voice) {
        return voice.lang === "en";
      })[0];

      // Create an utterance object
      var utterance = new SpeechSynthesisUtterance(outputDiv.innerText);

      // Set utterance properties
      utterance.voice = voice;
      utterance.pitch = 1.5;
      utterance.rate = 1.25;
      utterance.volume = 0.8;

      // Speak the utterance
      synthesis.speak(utterance);
    } else {
      console.log("Text-to-speech not supported.");
    }
  });
});
