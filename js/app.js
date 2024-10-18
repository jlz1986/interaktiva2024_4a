import { getDishesWithImages } from "../modules/data.js";
import {
  generateDishes,
  setupDownvoteListeners,
  filterDishesBySearchInput,
  setupSearchMovieButton,
} from "../modules/ui.js";

let dishes = [];

document.addEventListener("DOMContentLoaded", async () => {
  dishes = await getDishesWithImages();
  await generateDishes(dishes);
  setupDownvoteListeners(dishes);
  filterDishesBySearchInput(dishes);
  setupSearchMovieButton();
});
