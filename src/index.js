const form = document.querySelector(".numForm"),
  range = document.querySelector(".rangeInput"),
  inputNum = form.querySelector(".inputNum"),
  // maxNum = document.querySelector(".maxNum"),
  paintChose = document.querySelector(".paintChose"),
  paintResult = document.querySelector(".paintResult");

function result(myNum, randNum) {
  paintChose.innerText = `You chose: ${myNum}, the machine chose ${randNum}`;
  myNum = parseInt(myNum);
  if (myNum === randNum) {
    paintResult.innerText = "You won!";
  } else if (myNum > randNum || myNum < 0) {
    paintResult.innerText = "This is a wrong number.";
  } else {
    paintResult.innerText = "You lose!";
  }
}

function makeRandNum(e) {
  e.preventDefault();
  const myNum = inputNum.value;
  const maxValue = range.value;
  const randNum = Math.ceil(Math.random() * maxValue);

  result(myNum, randNum);
}

// range value 를 받아 출력하고 form 을 submit 할 시 makeRandNum 함수를 실행한다.
function handleInput() {
  // const maxNumValue = range.value;
  // maxNum.innerText = `${maxNumValue}`;
  form.addEventListener("submit", makeRandNum);
}

// range.oninput 으로 range value 를 실시간으로 받는다.
function init() {
  range.oninput = handleInput();
}

init();
