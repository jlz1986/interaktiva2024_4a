# 🍕 Matrecept-sidan

Välkommen till **Matrecept-sidan**, där du kan söka, filtrera och rösta på dina favoritmaträtter! Denna applikation är skapad med JavaScript, och använder moduler för att hantera data, gränssnitt och API-anrop.

## 🚀 Funktioner

### 1. 📝 Sökfunktion

- **Beskrivning:** Du kan söka efter recept genom att skriva in valfria bokstäver eller ord i sökfältet.
- **Funktion:** Filtrerar maträtter baserat på vad som finns i titeln.

  ```javascript
  export function filterDishesBySearchInput(dishes) {
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const filteredDishes = dishes.filter((dish) =>
        dish.title.toLowerCase().includes(query)
      );
      generateDishes(filteredDishes);
    });
  }
  ```
