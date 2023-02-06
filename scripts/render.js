import { addButtons } from "./addButtons.js";
import { taskList, wrapperButton } from "./globalVariable.js";
import { renderTask } from "./renderTask.js";

export const render = () => {
  taskList.className = "";
  taskList.innerHTML = "";
  wrapperButton.className = "";
  wrapperButton.innerHTML = "";
  if (localStorage.getItem("task")) {
    if (JSON.parse(localStorage.getItem("task")).length) {
      taskList.className = "main__wrapper-task-list";
      addButtons();
      for (let elem of JSON.parse(localStorage.getItem("task"))) {
        renderTask(elem);
      }
    }
  } else localStorage.setItem("task", JSON.stringify([]));
};
