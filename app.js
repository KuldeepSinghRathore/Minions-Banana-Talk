var btnTranslate = document.querySelector("#btn");
var txtinput = document.querySelector("#txt-input");
// console.log(txtinput);
var outputDiv = document.querySelector("#output");

// var mockApiUrl= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var mockApiUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
  return mockApiUrl + "?" + "text=" + text;
}
function errorHandler(error) {
  console.log("error occured", error);
  alert("There is issue with server please try after Sometimes");
}

function clickEventHandler() {
  var inputText = txtinput.value;

  //calling fetch
  fetch(getTranslationURL(inputText))
    .then(function responseHandler(response) {
      return response.json();
    })
    .then(function logJSON(json) {
      translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btn.addEventListener("click", clickEventHandler);
