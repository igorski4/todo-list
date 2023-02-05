import { taskList } from "./globalVariable.js";
import { renderTask } from "./renderTask.js";

export const render = () => {
  taskList.innerHTML = "";
  if (localStorage.getItem("task")) {
    for (let elem of JSON.parse(localStorage.getItem("task"))) {
      renderTask(elem);
    }
  } else localStorage.setItem("task", JSON.stringify([]));
};
