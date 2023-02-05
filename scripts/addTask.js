import { input } from "./globalVariable.js";
import { renderTask } from "./renderTask.js";

export const addTask = () => {
  if (input.value) {
    let obj = { text: input.value, condition: true };
    input.value = "";

    let arr = JSON.parse(localStorage.getItem("task"));
    arr.push(obj);
    localStorage.setItem("task", JSON.stringify(arr));

    renderTask(obj);
  } else {
    input.style.borderColor = "red";
    setTimeout(() => (input.style.borderColor = "#CED4DA"), 600);
  }
};
