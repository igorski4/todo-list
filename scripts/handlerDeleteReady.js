import { render } from "./render.js";

export const handlerDeleteReady = () => {
  let tempArr = JSON.parse(localStorage.getItem("task"));
  let newArr = [];
  for (let i = 0; i < tempArr.length; i++)
    if (tempArr[i].condition) newArr.push(tempArr[i]);
  localStorage.setItem("task", JSON.stringify(newArr));
  render();
};
