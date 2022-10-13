const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const result = document.getElementById("result");
// Lista com as teclas permitidas
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

// Função para realizar as funcionalidades dos botões
document.querySelectorAll(".charKey").forEach(function (charkeyBtn) {
  charkeyBtn.addEventListener("click", function () {
    const value = charkeyBtn.dataset.value;
    input.value += value;
  });
});

// Função para evitar que algumas teclas sejam aceitas os seus valores
input.addEventListener("keydown", function (ev) {
  ev.preventDefault();
  // Condição para ver se a tecla digitada está incluida na lista permitida
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    // Condição se a tecla de apagar for apertada
  } else if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
    // Condição se a tecla de enter for apertada
  } else if (ev.key === "Enter") {
    calculate();
  }
});

// Função para limpar o input
document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
  result.value = "";
});

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  result.value = "ERROR";
  result.classList.add("error");
  const res = eval(input.value);
  result.value = res;
  result.classList.remove("error");
}

document
  .getElementById("copyToClipboard")
  .addEventListener("click", function (ev) {
    const button = ev.currentTarget;
    if (button.innerText === "Copy") {
      button.innerText = "Copied!";
      button.classList.add("success");
      navigator.clipboard.writeText(result.value);
    } else {
      button.innerText = "Copy";
      button.classList.remove("success");
    }
  });

document.getElementById("themeSwitcher").addEventListener("click", function () {
  document.body.classList.toggle("isDark");
  document.body.classList.toggle("isWhite");
});
