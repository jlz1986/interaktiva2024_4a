import { getUniqueIngredientTypes } from "./data.js";
import { typeToIconMap } from "./icon.js";

function createIconsForTypes(types) {
  const foodTypeDiv = document.createElement("div");
  foodTypeDiv.classList.add("food-type");

  // Loopa igenom typerna och skapa ikoner
  types.forEach((type) => {
    const iconData = typeToIconMap[type];
    if (iconData) {
      const foodIcon = document.createElement("i");
      foodIcon.className = iconData.class;
      foodIcon.title = iconData.title;
      foodIcon.alt = iconData.alt;
      foodTypeDiv.appendChild(foodIcon);
    } else {
      console.error(`Ingen ikon hittades för typen: ${type}`);
    }
  });

  return foodTypeDiv; // Returnera div med alla ikoner
}

export async function generateDishes(dishes) {
  const container = document.querySelector(".flex-container");
  container.innerHTML = "";

  // här vill vi se alla maträtter snyggt i html
  for (const dish of dishes) {
    const article = document.createElement("article");
    const articleData = document.createElement("div");
    articleData.classList.add("article-data");
    const title = document.createElement("h3");
    title.textContent = dish.title;

    const types = getUniqueIngredientTypes(dish);
    const foodtype = createIconsForTypes(types);
    console.log(foodtype);
    articleData.appendChild(title);
    articleData.appendChild(foodtype);
    article.appendChild(articleData);
    container.appendChild(article);
  }
  //skapa en article
}
