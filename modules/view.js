import { input } from "./variables.js";

// Função para limpar o input
const clear = document
  .getElementById("clear")
  .addEventListener("click", function () {
    input.value = "";
    input.focus();
    result.value = "";
  });

const copy = document
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

const switchTheme = document
  .getElementById("themeSwitcher")
  .addEventListener("click", function () {
    document.body.classList.toggle("isDark");
    document.body.classList.toggle("isWhite");
  });

export { clear, switchTheme, copy };
