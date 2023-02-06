import { handlerDeleteTask } from "./handlerDeleteTask.js";

export const handlerEdit = (event, index) => {
  let mainTask = event.target.closest(".main__task");
  let arrTask = JSON.parse(localStorage.getItem("task"));
  let tempIndex = arrTask.length - (index + 1);
  if (
    arrTask[tempIndex].condition === true ||
    document.querySelector(".task__edit-input")
  ) {
    if (event.target.value === "✏️") {
      event.target.value = "✅";
      let inputEdit = document.createElement("input");
      inputEdit.className = "task__edit-input";
      inputEdit.type = "text";
      inputEdit.value = `${mainTask.querySelector(".task__text").textContent}`;
      mainTask.querySelector(".task__text").remove();
      mainTask.querySelector(".task__label").after(inputEdit);
    } else {
      if (mainTask.querySelector(".task__edit-input").value === "") {
        handlerDeleteTask(index);
      } else {
        arrTask[tempIndex].text =
          mainTask.querySelector(".task__edit-input").value;
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
    }
  }
};
