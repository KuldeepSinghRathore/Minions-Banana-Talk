var btnTranslate = document.querySelector('#btn-translate');
var txtinput = document.querySelector('#txt-input');
// console.log(txtinput);
var outputDiv = document.querySelector("#output");

function clickEventHandler() {
    
     outputDiv.innerText = "lalalaljjsjjs   " + txtinput.value;
};

btnTranslate.addEventListener("click", clickEventHandler );