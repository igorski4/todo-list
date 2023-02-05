import { taskList } from "./globalVariable.js";

export const renderTask = (elem) => {
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
