import calculate from "./model.js";
import { allowedKeys, input } from "./variables.js";

// Função para evitar que algumas teclas sejam aceitas os seus valores
const keyDown = input.addEventListener("keydown", function (ev) {
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

export default  keyDown;
