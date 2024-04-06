// selected all html id
const number = document.getElementById("number");

// window onload
window.onload = function () {
  mainFun();
};

function mainFun() {
  let counter = 0;
  setInterval(() => {
    if (counter === 75) {
      clearInterval();
    } else {
      counter += 1;
      number.innerHTML = counter;
    }
  }, 27);
}
