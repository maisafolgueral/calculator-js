export default function calculate() {
  const resultInput = document.querySelector("#result");

  resultInput.value = "ERROR";
  resultInput.classList.add("error");

  const result = eval(document.getElementById("input").value);
  resultInput.value = result;

  resultInput.classList.remove("error");
}
