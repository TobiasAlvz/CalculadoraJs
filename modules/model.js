import { input, result } from "./variables.js";

// Função para realizar as funcionalidades dos botões
const charKey = document
  .querySelectorAll(".charKey")
  .forEach(function (charkeyBtn) {
    charkeyBtn.addEventListener("click", function () {
      const value = charkeyBtn.dataset.value;
      input.value += value;
    });
  });

function calculate() {
  result.value = "ERROR";
  result.classList.add("error");
  const res = eval(input.value);
  result.value = res;
  result.classList.remove("error");
}

export { charKey };
export default calculate;
