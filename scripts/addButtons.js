import { wrapperButton, mainWrapper } from "./globalVariable.js";

export const addButtons = () => {
  wrapperButton.className = "main__wrapper-footer";
  wrapperButton.innerHTML = `
            <button class="main__button main__button-delete-ready">
              Удалить завершенные
            </button>
            <button class="main__button main__button-delete-all">
              Удалить все
            </button>`;
  mainWrapper.append(wrapperButton);
};
