import { taskList, wrapperButton } from "./globalVariable.js";

export const handlerDeleteTask = (index) => {
  let arrTask = JSON.parse(localStorage.getItem("task"));
  arrTask.splice(arrTask.length - 1 - index, 1);
  localStorage.setItem("task", JSON.stringify(arrTask));
  document.querySelectorAll(".main__task")[index].remove();
  if (arrTask.length === 0) {
    taskList.className = "";
    taskList.innerHTML = "";
    wrapperButton.className = "";
    wrapperButton.innerHTML = "";
  }
};
