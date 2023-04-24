import { useState } from "react";

import CategoryFilters from "./components/CategoryFilters";
import ImageSizeController from "./components/ImageSizeController";
import ImageGallery from "./components/ImageGallery";

import Fade from "./animation/Fade";
import "./styles.css";

export default function App() {
  const dataLength = itemsData.length;
  const adjustDisplayAmount = Math.min(
    dataLength,
    window.innerWidth <= 600 ? 2 : 3
  );

  const [imgSize, setImgSize] = useState(() => adjustDisplayAmount);
  const [filter, setFilter] = useState(categories[2]);

  const filteredData =
    filter === "All"
      ? itemsData
      : itemsData.filter((item) => item.type.includes(filter));

  const handleChange = (value) => {
    // const indexValue = categories.findIndex((val) => val === value);
    // const indexValue = categories.indexOf(value);
    // setFilter(() => indexValue);
    // You pass a function to setFilter that computes the new value of filter based on the current value of indexValue. This ensures that setFilter always receives the most up-to-date value of indexValue, even if categories or value have been updated in the meantime.
    setFilter(value);
    // setFilter(() => value) uses a functional update to set the new state value based on the previous state value. This can be useful in certain situations, for example when the new state value depends on the previous state value. In this particular case, however, there is no need to use a functional update because the new state value doesn't depend on the previous state value.
  };

  return (
    <div className="App">
      <CategoryFilters categories={categories} onChange={handleChange} />
      <ImageSizeController
        imgSize={imgSize}
        onColumnsChange={(val) => setImgSize(val)}
        disable={dataLength <= 1}
        dataLength={dataLength}
      />
      <Fade duration={2.5}>
        <ImageGallery itemsData={filteredData} imgSize={imgSize} />
      </Fade>
    </div>
  );
}
const categories = ["Sleep", "Funny", "Inspector", "All"];

const itemsData1 = [
  {
    title: "Reggie_business.jpg",
    img: require("./assets/images/Reggie_business.jpg"),
  },
  {
    title: "Reggie_hungry.jpg",
    img: require("./assets/images/Reggie_hungry.jpg"),
  },
];
const itemsData = [
  {
    title: "Reggie_business.jpg",
    img: require("./assets/images/Reggie_business.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_hungry.jpg",
    img: require("./assets/images/Reggie_hungry.jpg"),
    type: [categories[1], categories[2]],
  },
  {
    title: "Reggie_savana.jpg",
    img: require("./assets/images/Reggie_savana.jpg"),
    type: categories[0],
  },
  {
    title: "Reggie_study.jpg",
    img: require("./assets/images/Reggie_study.jpg"),
    type: categories[0],
  },
  {
    title: "Reggie_underBed.jpg",
    img: require("./assets/images/Reggie_underBed.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_caveToy.jpg",
    img: require("./assets/images/Reggie_caveToy.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_chairNap.jpg",
    img: require("./assets/images/Reggie_chairNap.jpg"),
    type: categories[0],
  },
  {
    title: "Reggie_cosmetics.jpg",
    img: require("./assets/images/Reggie_cosmetics.jpg"),
    type: categories[2],
  },
  {
    title: "Reggie_hunts1.jpg",
    img: require("./assets/images/Reggie_hunts1.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_nails.jpg",
    img: require("./assets/images/Reggie_nails.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_pjms.jpg",
    img: require("./assets/images/Reggie_pjms.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_roses.jpg",
    img: require("./assets/images/Reggie_roses.jpg"),
    type: categories[2],
  },
  {
    title: "Reggie_savana2.jpg",
    img: require("./assets/images/Reggie_savana2.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_savana3.jpg",
    img: require("./assets/images/Reggie_savana3.jpg"),
    type: categories[2],
  },
  {
    title: "Reggie_wsks1.jpg",
    img: require("./assets/images/Reggie_wsks1.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_balcony.jpg",
    img: require("./assets/images/Reggie_balcony.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_shoes.jpg",
    img: require("./assets/images/Reggie_shoes.jpg"),
    type: categories[2],
  },
  {
    title: "Reggie_savana4.jpg",
    img: require("./assets/images/Reggie_savana4.jpg"),
    type: [categories[2], categories[1]],
  },
  {
    title: "Reggie_wsks2.jpg",
    img: require("./assets/images/Reggie_wsks2.jpg"),
    type: categories[1],
  },
  {
    title: "Reggie_sleepHug.jpg",
    img: require("./assets/images/Reggie_sleepHug.jpg"),
    type: [categories[1], categories[0]],
  },
  {
    title: "Reggie_skin.jpg",
    img: require("./assets/images/Reggie_skin.jpg"),
    type: categories[1],
  },
  // { title: "lmaoAI.jpeg", img: require("./assets/images/lmaoAI.jpeg") },
];
