import {
  buttonInput,
  buttonDeleteReady,
  buttonDeleteAll,
  taskList,
} from "./globalVariable.js";
import { render } from "./render.js";
import { handlerCheckbox } from "./handlerCheckbox.js";
import { handlerDeleteTask } from "./handlerDeleteTask.js";
import { handlerDeleteAll } from "./handlerDeleteAll.js";
import { handlerDeleteReady } from "./handlerDeleteReady.js";
import { addTask } from "./addTask.js";

render();
buttonInput.addEventListener("click", addTask);
buttonDeleteAll.addEventListener("click", handlerDeleteAll);
buttonDeleteReady.addEventListener("click", handlerDeleteReady);

const handlerEdit = (event, index) => {
  let mainTask = event.target.closest(".main__task");
  if (event.target.value === "✏️") {
    event.target.value = "✅";
    let inputEdit = document.createElement("input");
    inputEdit.className = "task__edit-input";
    inputEdit.type = "text";
    inputEdit.value = `${mainTask.querySelector(".task__text").textContent}`;
    mainTask.querySelector(".task__text").remove();
    mainTask.querySelector(".task__label").after(inputEdit);
  } else {
    let arrTask = JSON.parse(localStorage.getItem("task"));
    let tempIndex = arrTask.length - (index + 1);
    arrTask[tempIndex].text = mainTask.querySelector(".task__edit-input").value;
    localStorage.setItem("task", JSON.stringify(arrTask));

    event.target.value = "✏️";
    let taskText = document.createElement("p");
    taskText.className = "task__text";
    taskText.style.textDecoration = `${
      arrTask[tempIndex].condition ? "none" : "line-through"
    }`;
    taskText.textContent = `${arrTask[tempIndex].text}`;
    mainTask.querySelector(".task__edit-input").remove();
    mainTask.querySelector(".task__label").after(taskText);
  }
};

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
