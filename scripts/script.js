import { data } from "./data.js";
import { input, select } from "./globalVariable.js";
import { addCard } from "./addCard.js";
import { handler } from "./handler.js";

data.forEach((el) => addCard(el));

input.addEventListener("input", handler);

select.addEventListener("change", handler);
