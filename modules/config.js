export const config = {
  cmdbApi: {
    baseUrl: "https://dsvkurs.miun.se/api",
    key: "X-API-KEY",
    value: "", // lägg in din nyckel
  },
  imageConfig: {
    base_url: "https://image.tmdb.org/t/p/",
    secure_base_url: "https://image.tmdb.org/t/p/",
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    profile_sizes: ["w45", "w185", "h632", "original"],
    backdrop_sizes: ["w300", "w780", "w1280", "original"],
  },
};
