const input = document.getElementById("inputText");
const line = document.getElementById("line");
var mode = false;
var rndNumber;

function onChange() {
  if (input.value == "return") {
    line.innerHTML = "start?";
    input.value = "";
    mode = false;
  }
  if (!mode) {
    start();
  } else {
    game();
  }
}

function start() {
  if (input.value == "start") {
    input.value = "";
    line.innerHTML = "let's go";
    rndNumber = getRandom(20);
    mode = true;
  }
}

function game() {
  var thisNumber = input.value;
  if (thisNumber < rndNumber) {
    input.value = "";
    line.innerHTML = "x number is more than "+thisNumber;
  } else if (thisNumber > rndNumber) {
    input.value = "";
    line.innerHTML = "x number is less than "+thisNumber;
  } else if (thisNumber == rndNumber) {
    input.value = "";
    line.innerHTML = "x number is " + rndNumber + "!!!<br>"+"write return";
  }
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}
function onLoad(){
    input.focus();
}
