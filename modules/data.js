export function getUniqueIngredientTypes(dish) {
  const uniqueTypes = new Set();
  dish.ingredients.forEach((ingredient) => {
    ingredient.types.forEach((type) => {
      uniqueTypes.add(type);
    });
  });
  return uniqueTypes;
}
