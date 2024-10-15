// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

export function getDishes() {
  return [
    {
      id: 1,
      calories: "1500",
      description:
        "Denna klassiska italienska rätt, ofta kallad 'spaghetti bolognese', kombinerar al dente-kokt pasta med en rik och mustig köttfärssås gjord på nötfärs, tomater, lök, vitlök och örter som oregano och basilika. Det är en enkel men smakrik rätt som kan varieras och förfinas efter egen smak, och som alltid ger en hemtrevlig känsla.",
      title: "Spaghetti Bolognese",
      downvotes: 1,
      upvotes: 3,
      ingredients: [
        {
          ingredient: "Nötfärs",
          types: ["Köttätare"],
        },
        {
          ingredient: "Tomater",
          types: ["Vegetarian", "Vegan"],
        },
        {
          ingredient: "Lök",
          types: ["Vegetarian", "Vegan"],
        },
        {
          ingredient: "Vitlök",
          types: ["Vegetarian", "Vegan"],
        },
        {
          ingredient: "Oregano",
          types: ["Vegetarian", "Vegan"],
        },
      ],
    },
    {
      id: 2,
      calories: "1200",
      description:
        "Chili con carne är en älskad klassiker från det mexikansk-texanska köket som bjuder på en mustig och värmande smakupplevelse.",
      title: "Chili con carne",
      downvotes: 2,
      upvotes: 7,
      ingredients: [
        {
          ingredient: "Nötkött",
          types: ["Köttätare"],
        },
        {
          ingredient: "Bönor",
          types: ["Vegetarian"],
        },
        {
          ingredient: "Tomater",
          types: ["Vegetarian", "Vegan"],
        },
        {
          ingredient: "Chili",
          types: ["Vegetarian", "Vegan"],
        },
      ],
    },
    {
      id: 3,
      calories: "800",
      description:
        "Detta klassiska recept har mättat allt ifrån hungriga drakar till superstarka björnar.",
      title: "Farmors pannkakor",
      downvotes: 4,
      upvotes: 5,
      ingredients: [
        {
          ingredient: "Ägg",
          types: ["Vegetarian"],
        },
        {
          ingredient: "Mjölk",
          types: ["Vegetarian"],
        },
        {
          ingredient: "Mjöl",
          types: ["Vegetarian", "Gluten"],
        },
      ],
    },
    {
      id: 4,
      calories: "1700",
      description:
        "Asiatiskt sidfläsk är en rätt som bjuder på en explosion av smaker och texturer.",
      title: "Asiatisk sesamfläsk med grönsaker",
      downvotes: 0,
      upvotes: 9,
      ingredients: [
        {
          ingredient: "Fläskkött",
          types: ["Pork"],
        },
        {
          ingredient: "Sesamolja",
          types: ["Vegetarian", "Vegan"],
        },
        {
          ingredient: "Soja",
          types: ["Vegetarian", "Vegan"],
        },
      ],
    },
    {
      id: 5,
      calories: "600",
      description:
        "En tidlös klassiker med krispiga romansalladsblad och saftig kyckling.",
      title: "Caesarsallad",
      downvotes: 1,
      upvotes: 6,
      ingredients: [
        {
          ingredient: "Romansallad",
          types: ["Vegetarian", "Vegan"],
        },
        {
          ingredient: "Kyckling",
          types: ["Köttätare"],
        },
        {
          ingredient: "Parmesan",
          types: ["Vegetarian", "Mjölkprodukter"],
        },
        {
          ingredient: "Krutonger",
          types: ["Vegetarian", "Gluten"],
        },
      ],
    },
    {
      id: 6,
      calories: "900",
      description:
        "Saftiga heta räkor i en härlig kombination av vitlök, chili och örter.",
      title: "Heta räkor",
      downvotes: 1,
      upvotes: 3,
      ingredients: [
        {
          ingredient: "Räkor",
          types: ["Seafood"],
        },
        {
          ingredient: "Vitlök",
          types: ["Vegetarian", "Vegan"],
        },
        {
          ingredient: "Chili",
          types: ["Vegetarian", "Vegan"],
        },
      ],
    },
    {
      id: 7,
      calories: "500",
      description:
        "Den här veganska pajen är full med smak. Körsbärstomaterna får en fin söt ton av att tillagas i ugnen och stuvningen gör pajen krämig och god. Låt gärna pajen vila minst en timme före servering, då håller den ihop bättre.",
      title: "Vegansk tomat- och purjolökspaj",
      downvotes: 1,
      upvotes: 3,
      ingredients: [
        {
          ingredient: "Margarin",
          types: ["Vegetarian", "Vegan"],
        },
        {
          ingredient: "Paprika",
          types: ["Vegetarian", "Vegan"],
        },
        {
          ingredient: "Olivolja",
          types: ["Vegetarian", "Vegan"],
        },
      ],
    },
  ];
}
