import {
  input,
  buttonInput,
  buttonDeleteReady,
  buttonDeleteAll,
  taskList,
} from "./globalVariable.js";
import { renderTask } from "./renderTask.js";

const render = () => {
  document.querySelector(".main__wrapper-task-list").innerHTML = "";
  if (localStorage.getItem("task")) {
    let arrTask = JSON.parse(localStorage.getItem("task"));
    for (let i = 0; i < arrTask.length; i++) {
      renderTask(arrTask[i]);
    }
    // updateCheckbox();
  } else localStorage.setItem("task", JSON.stringify([]));
};

const handlerCheckbox = (event, index) => {
  let checkboxIndex =
    document.querySelectorAll(".task__new-status").length - 1 - index;
  let taskText = event.target
    .closest(".main__task")
    .querySelector(".task__text");
  let arrTask = JSON.parse(localStorage.getItem("task"));
  taskText.style.textDecoration = arrTask[checkboxIndex].condition
    ? "line-through"
    : "none";
  arrTask[checkboxIndex].condition = !arrTask[checkboxIndex].condition;
  localStorage.setItem("task", JSON.stringify(arrTask));
};

const handlerDeleteTask = (index) => {
  let arrTask = JSON.parse(localStorage.getItem("task"));
  console.log(index);
  console.log(arrTask.length - 1 - index);
  arrTask.splice(arrTask.length - 1 - index, 1);
  localStorage.setItem("task", JSON.stringify(arrTask));
  document.querySelectorAll(".main__task")[index].remove();
};

const addTask = () => {
  if (input.value) {
    let obj = {};
    obj.text = input.value;
    obj.condition = true;
    input.value = "";

    let arr = JSON.parse(localStorage.getItem("task"));
    arr.push(obj);
    localStorage.setItem("task", JSON.stringify(arr));

    renderTask(obj);
    // updateCheckbox();
    // updateDeleteTask();
  }
};

const handlerDeleteAll = () => {
  localStorage.setItem("task", JSON.stringify([]));
  render();
  // updateDeleteTask();
};

const handlerDeleteReady = () => {
  let tempArr = JSON.parse(localStorage.getItem("task"));
  let newArr = [];
  for (let i = 0; i < tempArr.length; i++)
    if (tempArr[i].condition) newArr.push(tempArr[i]);
  localStorage.setItem("task", JSON.stringify(newArr));
  render();
  // updateDeleteTask();
};

render();
// updateDeleteTask();
buttonInput.addEventListener("click", addTask);
buttonDeleteAll.addEventListener("click", handlerDeleteAll);
buttonDeleteReady.addEventListener("click", handlerDeleteReady);

taskList.addEventListener("click", (event) => {
  let index = [...document.querySelectorAll(".task__new-status")].indexOf(
    event.target
  );
  if (~index) {
    handlerCheckbox(event, index);
  } else {
    index = [...document.querySelectorAll(".task__delete")].indexOf(
      event.target
    );
    if (~index) {
      handlerDeleteTask(index);
    }
  }
});
