import keyDown from "./modules/controller.js";
import calculate, { charKey } from "./modules/model.js";
import { clear, switchTheme, copy } from "./modules/view.js";

document.querySelectorAll(".charKey").forEach(function (charkeyBtn) {
  charkeyBtn.addEventListener("click", charKey);
});

input.addEventListener("keydown", keyDown);

document.getElementById("clear").addEventListener("click", clear);

document.getElementById("equal").addEventListener("click", calculate);

document.getElementById("copyToClipboard").addEventListener("click", copy);

document.getElementById("themeSwitcher").addEventListener("click", switchTheme);
