export async function fetchFoodImage() {
  try {
    const response = await fetch("https://foodish-api.com/api/");
    if (!response.ok) {
      throw new Error("Kunde inte hämta en bild");
    }
    const data = await response.json();

    return data.image;
  } catch (error) {
    console.error("Fel vid hämtning av bild");
    return null;
  }
}
