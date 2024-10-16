import { getUniqueIngredientTypes, downVoteDish } from "./data.js";
import { typeToIconMap } from "./icon.js";

// *********** sök *******************

export function filterDishesBySearchInput(dishes) {
  const searchInput = document.querySelector("#search-input");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    const filteredDishes = dishes.filter((dish) =>
      dish.title.toLowerCase().includes(query)
    );
    // tips
    // kommer samma maträtt flera gånger? Testa att skapa en clearDishes();
    clearDishes();
    generateDishes(filteredDishes);
    setupDownvoteListeners(filteredDishes);
  });
}

// *********** röstningsfunktioner *******************

export function setupDownvoteListeners(dishes) {
  // Lägg till event-lyssnare för downvote-knappar
  document.querySelectorAll(".fa-thumbs-down").forEach((downvoteIcon) => {
    downvoteIcon.addEventListener("click", (event) => {
      const dishId = event.target.closest("article").getAttribute("data-id");
      const updatedDish = downVoteDish(dishes, dishId); // Uppdatera data

      if (updatedDish) {
        // Uppdatera DOM
        const downvoteSpan = event.target
          .closest("article")
          .querySelector(".downvotes");
        downvoteSpan.textContent = updatedDish.downvotes;
      }
    });
  });
}

// *********** hantera ikoner *******************
function createIconsForTypes(types) {
  const foodTypeDiv = document.createElement("div");
  foodTypeDiv.classList.add("food-type");

  // Loopa igenom typerna och skapa ikoner
  // kommentar
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

// *********** skriv ut alla maträtter *******************

function clearDishes() {
  const container = document.querySelector(".flex-container");
  container.innerHTML = "";
}

export async function generateDishes(dishes) {
  const container = document.querySelector(".flex-container");
  container.innerHTML = "";

  // här vill vi se alla maträtter snyggt i html
  for (const dish of dishes) {
    const article = document.createElement("article");

    // ger maträtten (article) ett unikt id
    article.setAttribute("data-id", dish.id);

    const image = document.createElement("img");
    image.src = dish.image;
    article.appendChild(image);
    const articleData = document.createElement("div");
    articleData.classList.add("article-data");
    const title = document.createElement("h3");
    title.textContent = dish.title;

    // article-bottom div
    const articleBottom = document.createElement("div");
    articleBottom.classList.add("article-bottom");

    // Downvotes
    const downgradeDiv = document.createElement("div");
    downgradeDiv.classList.add("downgrade");
    const downvotesSpan = document.createElement("span");
    downvotesSpan.classList.add("downvotes");
    downvotesSpan.textContent = dish.downvotes;

    downgradeDiv.appendChild(downvotesSpan);
    const downvoteIcon = document.createElement("i");
    downvoteIcon.classList.add("fa-regular", "fa-thumbs-down");
    // låt inte skärmläsare läsa upp det som skrivs
    downvoteIcon.setAttribute("aria-hidden", "true");

    // lägg till down-vote till div
    downgradeDiv.appendChild(downvoteIcon);
    articleBottom.appendChild(downgradeDiv);

    const types = getUniqueIngredientTypes(dish);
    const icons = createIconsForTypes(types);
    articleBottom.appendChild(icons);
    articleData.appendChild(articleBottom);

    articleData.appendChild(title);
    articleData.appendChild(icons);
    article.appendChild(articleData);
    container.appendChild(article);
  }
}
