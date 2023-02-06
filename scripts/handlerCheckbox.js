export const handlerCheckbox = (event, index) => {
  let taskText = event.target
    .closest(".main__task")
    .querySelector(".task__text");
  let checkboxIndex =
    document.querySelectorAll(".task__new-status").length - 1 - index;
  let arrTask = JSON.parse(localStorage.getItem("task"));
  if (taskText) {
    taskText.style.textDecoration = arrTask[checkboxIndex].condition
      ? "line-through"
      : "none";
  }
  arrTask[checkboxIndex].condition = !arrTask[checkboxIndex].condition;
  localStorage.setItem("task", JSON.stringify(arrTask));
};
