import { config } from "./config.js";

const baseUrl = [config.cmdbApi.baseUrl];
export async function getGenres() {
  console.log("base" + baseUrl);
  try {
    let endpoint = baseUrl + "/Genres";
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        [config.cmdbApi.key]: config.cmdbApi.value, //här ska du ersätta med din apinyckel!!!!
      },
    });

    if (!response.ok) {
      console.log("felaktigt anrop");
    }
    const genres = await response.json();
    return genres;
  } catch (error) {
    console.error("Kunde inte hämta, något gick fel", error);
  }
}

export async function reviewMedia(reviewDto) {
  try {
    let endpoint = baseUrl + "/Contributions/Review";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        [config.cmdbApi.key]: config.cmdbApi.value,
      },
      body: JSON.stringify(reviewDto),
    });
    console.log("response", response.status);
    console.log("data", response);

    if (response.status === 409) {
      const errorData = await response.json();
      console.warn(errorData.detail);
      return { error: true, message: errorData.detail, status: 409 };
    }

    if (response.status === 400) {
      const errorData = await response.json();
      console.warn(errorData.detail);
      return { error: true, message: errorData.detail, status: 400 };
    }

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const mediaDto = await response.json();
    return medidaDto;
  } catch (error) {
    console.error("Kunde inte skicka recension, något gick fel", error);
  }
}
