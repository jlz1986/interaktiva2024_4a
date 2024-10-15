import { getDishes } from "../modules/mockData.js";
import { generateDishes } from "../modules/ui.js";
let dishes = [];

document.addEventListener("DOMContentLoaded", async () => {
  dishes = await getDishes();
  await generateDishes(dishes);
});
