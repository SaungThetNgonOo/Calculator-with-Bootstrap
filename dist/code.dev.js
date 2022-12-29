"use strict";

console.log("hello");
var show = document.getElementById('output');
var numbers = Array.from(document.getElementsByClassName('number'));
var Clear = document.getElementById('clear');
var Delete = document.getElementById('del');
var Operation = Array.from(document.getElementsByClassName('operation'));
var Equal = document.getElementById('equal');
var Dot = document.getElementById('dot');
console.log(show);
console.log(numbers);

for (var i = 0; i < show.innerText.length; i++) {
  console.log(show.innerText[i]);
}

numbers.map(function (button) {
  button.addEventListener('click', function (e) {
    // console.log(e.target.innerText)
    // switch(e.target.innerText){
    //     case'AC':
    //         show.innerText="";
    //         break
    //     case'DEL':
    //         if(show.innerText){
    //             show.innerText=show.innerText.slice(0, -1)
    //         }
    //         break
    //     case'=':
    //         try{
    //             show.innerText=eval(show.innerText)
    //         }
    //         catch{
    //             show.innerText='invalid';
    //         }
    //         break
    //     default:{
    //              if(show.innerText){
    //                 if(show.innerText.endsWith("+")|| show.innerText.endsWith("-")||show.innerText.endsWith("*")||show.innerText.endsWith("/")){
    //                     // const last=show.innerText.charAt(show.innerText.endsWith)
    //                     //  console.log(last)
    //                 show.innerText+=""
    //                 }
    //         }else
    //          show.innerText += e.target.innerText
    //     }
    // }
    if (show.innerText == "0") {
      show.innerText = e.target.innerText;
    } else if (show.innerText != "0") {
      show.innerText += e.target.innerText;
    }
  });
});
Operation.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (show.innerText == "0" || show.innerText.endsWith("+") || show.innerText.endsWith("-") || show.innerText.endsWith("*") || show.innerText.endsWith("/") || show.innerText.endsWith("%")) {
      show.innerText = show.innerText;
    } else {
      show.innerText += e.target.innerText;
    }
  });
});
Clear.addEventListener('click', function () {
  if (show.innerText) show.innerText = "";
});
Delete.addEventListener('click', function (button) {
  if (show.innerText) {
    show.innerText = show.innerText.slice(0, -1);
  }
});
Equal.addEventListener('click', function (button) {
  show.innerText = eval(show.innerText);
});
Dot.addEventListener('click', function (e) {
  for (var _i = 0; _i < show.innerText.length; _i++) {
    if (show.innerText[0] == '.') {
      show.innerText = show.innerText;
    } else if (show.innerText.endsWith(".")) {
      show.innerText = show.innerText;
    } else {
      show.innerText += e.target.innerText;
    }
  }
});