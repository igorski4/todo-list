import { render } from "./render.js";

export const handlerDeleteAll = () => {
  localStorage.setItem("task", JSON.stringify([]));
  render();
};
