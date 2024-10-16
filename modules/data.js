import { getDishes } from "./mockdata.js";
import { fetchFoodImage } from "./api.js";

export function getUniqueIngredientTypes(dish) {
  const uniqueTypes = new Set();
  dish.ingredients.forEach((ingredient) => {
    ingredient.types.forEach((type) => {
      uniqueTypes.add(type);
    });
  });
  return uniqueTypes;
}

export async function getFoodImages(dishes) {
  for (const dish of dishes) {
    dish.image = await fetchFoodImage();
  }
  return dishes;
}

export function downVoteDish(dishes, dishId) {
  const dish = dishes.find((d) => d.id == dishId);
  if (dish) {
    dish.downvotes += 1;
  }
  return dish;
}

export async function getDishesWithImages() {
  const dishes = await getDishes();
  for (const dish of dishes) {
    dish.image = await fetchFoodImage();
  }
  return dishes;
}
