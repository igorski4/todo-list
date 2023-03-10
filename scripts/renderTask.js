import { taskList } from "./globalVariable.js";
import { addButtons } from "./addButtons.js";

export const renderTask = (elem) => {
  if (JSON.parse(localStorage.getItem("task")).length === 1) {
    taskList.className = "main__wrapper-task-list";
    addButtons();
  }
  let task = document.createElement("div");
  task.className = "main__task task";
  task.innerHTML = `
                <label class="task__label">
                  <input class="task__status" type="checkbox" />
                  <span class="task__new-status"></span>
                </label>
                <p class="task__text" style="text-decoration:${
                  elem.condition ? "none" : "line-through"
                }">${elem.text}</p>
                <input class="task__edit-symbol" type="button" value="✏️" />
                <input class="task__delete" type="button" value="❌" />`;
  if (!elem.condition) task.querySelector(".task__status").checked = true;
  taskList.prepend(task);
};
