export const config = {
  cmdbApi: {
    baseUrl: "https://dsvkurs.miun.se/api",
    key: "X-API-KEY",
    value: "", // lägg in din nyckel
  },
  imageConfig: {
    baseUrl: "https://image.tmdb.org/t/p/",
    secureBaseUrl: "https://image.tmdb.org/t/p/",
    posterSizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    profileSizes: ["w45", "w185", "h632", "original"],
    backdropSizes: ["w300", "w780", "w1280", "original"],
  },
};
