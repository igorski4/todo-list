export const handlerCheckbox = (event, index) => {
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
