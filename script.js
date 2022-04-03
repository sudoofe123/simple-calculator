const buttons = document.querySelectorAll(".btn");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");

const screen = document.querySelector(".screen");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    screen.value += value;
  });
});

equalBtn.addEventListener("click", function () {
  if (screen.value === "") {
    alert("enter a value");
  } else {
    const evaluate = eval(screen.value);
    screen.value = evaluate;
  }
});

clearBtn.addEventListener("click", function () {
  screen.value = "";
});
