import { buttonInput, taskList, wrapperButton } from "./globalVariable.js";
import { render } from "./render.js";
import { handlerCheckbox } from "./handlerCheckbox.js";
import { handlerDeleteTask } from "./handlerDeleteTask.js";
import { handlerDeleteAll } from "./handlerDeleteAll.js";
import { handlerDeleteReady } from "./handlerDeleteReady.js";
import { addTask } from "./addTask.js";
import { handlerEdit } from "./handlerEdit.js";

render();
buttonInput.addEventListener("click", addTask);

taskList.addEventListener("click", (event) => {
  let index = [...document.querySelectorAll(".task__new-status")].indexOf(
    event.target
  );
  if (~index) handlerCheckbox(event, index);
  else {
    index = [...document.querySelectorAll(".task__delete")].indexOf(
      event.target
    );
    if (~index) handlerDeleteTask(index);
    else {
      index = [...document.querySelectorAll(".task__edit-symbol")].indexOf(
        event.target
      );
      if (~index) handlerEdit(event, index);
    }
  }
});

wrapperButton.addEventListener("click", (event) => {
  if (event.target.textContent.trim() === "Удалить завершенные") {
    handlerDeleteReady();
  } else if (event.target.textContent.trim() === "Удалить все") {
    handlerDeleteAll();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Enter") addTask();
});
