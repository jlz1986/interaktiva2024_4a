import { getDishesWithImages, getFoodImages } from "../modules/data.js";
import {
  generateDishes,
  setupDownvoteListeners,
  filterDishesBySearchInput,
} from "../modules/ui.js";

let dishes = [];

document.addEventListener("DOMContentLoaded", async () => {
  // dishes = await getDishes();
  // dishes = await getFoodImages(dishes);

  // är det  rimligt att ha dubbla anrop? Nej
  // tips Gör en funktion som heter typ getDishesWithImages() som hämtar allt på samma gång.

  dishes = await getDishesWithImages();
  await generateDishes(dishes);
  setupDownvoteListeners(dishes);
  filterDishesBySearchInput(dishes);
});
