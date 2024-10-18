import { config } from "./config.js";

const baseUrl = [config.cmdbApi.testUrl];
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

export async function reviewMedia(mediaDto) {
  try {
    let endpoint = baseUrl + "/Contributions/Review";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        [config.cmdbApi.key]: config.cmdbApi.value,
      },
      body: JSON.stringify(mediaDto),
    });
    console.log("response", response.status);
    console.log("data", response);

    if (response.status === 409) {
      const errorData = await response.json();
      console.warn(errorData).detail;
    }

    if (response.status === 400) {
      const errorData = await response.json();
      console.warn(errorData).detail;
    }

    if (!response.ok) {
      console.log("felaktigt anrop");
    }
    const genres = await response.json();
    return genres;
  } catch (error) {
    console.error("Kunde inte hämta, något gick fel", error);
  }
}
