export const categories = ["Sleep", "Funny", "Inspector", "All"];

// NOTE: require is part of the CommonJS module system, which is synchronous. This means that when
// you use require, the module is loaded synchronously, which can have an impact on performance.

// export const itemsDataSmall = [
//   {
//     title: "Reggie_business.jpg",
//     img: require("./images/Reggie_business.jpg"),
//   },
//   {
//     title: "Reggie_hungry.jpg",
//     img: require("./images/Reggie_hungry.jpg"),
//   },
// ];

const imageNames = [
  "Reggie_business",
  "Reggie_hungry",
  "Reggie_savana",
  "Reggie_study",
  "Reggie_underBed",
  "Reggie_caveToy",
  "Reggie_chairNap",
  "Reggie_cosmetics",
  "Reggie_hunts1",
  "Reggie_nails",
  "Reggie_pjms",
  "Reggie_roses",
  "Reggie_savana2",
  "Reggie_savana3",
  "Reggie_wsks1",
  "Reggie_balcony",
  "Reggie_shoes",
  "Reggie_savana4",
  "Reggie_wsks2",
  "Reggie_sleepHug",
  "Reggie_skin",
];

const images = imageNames.map((name) => require(`./images/${name}.jpg`));

export const itemsData = [
  {
    title: "Reggie_business",
    img: images[0],
    type: categories[1],
  },
  {
    title: "Reggie_hungry",
    img: images[1],
    // img: require("./images/Reggie_hungry.jpg"),
    type: [categories[1], categories[2]],
  },
  {
    title: "Reggie_savana",
    img: images[2],
    // img: require("./images/Reggie_savana.jpg"),
    // type: categories[0],
    type: categories[1],
  },
  {
    title: "Reggie_study",
    img: images[3],
    // img: require("./images/Reggie_study.jpg"),
    // type: categories[0],
    type: categories[1],
  },
  {
    title: "Reggie_underBed",
    img: images[4],
    // img: require("./images/Reggie_underBed.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_caveToy",
    img: images[5],
    // img: require("./images/Reggie_caveToy.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_chairNap",
    img: images[6],
    // img: require("./images/Reggie_chairNap.jpg"),
    // type: categories[0],
    type: categories[1],
  },
  {
    title: "Reggie_cosmetics",
    img: images[7],
    // img: require("./images/Reggie_cosmetics.jpg"),
    type: categories[2],
  },
  {
    title: "Reggie_hunts1",
    img: images[8],
    // img: require("./images/Reggie_hunts1.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_nails",
    img: images[9],
    // img: require("./images/Reggie_nails.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_pjms",
    img: images[10],
    // img: require("./images/Reggie_pjms.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_roses",
    img: images[11],
    // img: require("./images/Reggie_roses.jpg"),
    type: categories[2],
  },
  {
    title: "Reggie_savana2",
    img: images[12],
    // img: require("./images/Reggie_savana2.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_savana3",
    img: images[13],
    // img: require("./images/Reggie_savana3.jpg"),
    type: categories[2],
  },
  {
    title: "Reggie_wsks1",
    img: images[14],
    // img: require("./images/Reggie_wsks1.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_balcony",
    img: images[15],
    // img: require("./images/Reggie_balcony.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_shoes",
    img: images[16],
    // img: require("./images/Reggie_shoes.jpg"),
    type: categories[2],
  },
  {
    title: "Reggie_savana4",
    img: images[17],
    // img: require("./images/Reggie_savana4.jpg"),
    type: [categories[2], categories[1]],
  },
  {
    title: "Reggie_wsks2",
    img: images[18],
    // img: require("./images/Reggie_wsks2.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_sleepHug",
    img: images[19],
    // img: require("./images/Reggie_sleepHug.jpg"),
    type: [categories[1], categories[0]],
  },
  {
    title: "Reggie_skin",
    img: images[20],
    // img: require("./images/Reggie_skin.jpg"),
    type: categories[1],
  },
  // { title: "lmaoAI.jpeg", img: require("./images/lmaoAI.jpeg") },
];
