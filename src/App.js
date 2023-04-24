import { useState, useEffect } from "react";

import CategoryFilters from "./components/CategoryFilters";
import ImageSizeController from "./components/ImageSizeController";
import ImageGallery from "./components/ImageGallery";
import { itemsData, categories } from "./assets/data";

import Fade from "./animation/Fade";
import "./styles.css";

export default function App() {
  const [filterCategory, setFilterCategory] = useState("All");
  const filteredData =
    filterCategory === "All"
      ? itemsData
      : itemsData.filter((item) => item.type.includes(filterCategory));
  const dataLength = filteredData.length;
  const [columnNumber, setColumnNumber] = useState(() =>
    getAdjustedDisplayAmount()
  );

  function getAdjustedDisplayAmount() {
    return Math.min(dataLength, window.innerWidth <= 600 ? 2 : 3);
  }

  useEffect(() => {
    const handleResize = () => {
      setColumnNumber(getAdjustedDisplayAmount);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dataLength]);

  return (
    <div className="App">
      <CategoryFilters
        categories={categories}
        onChange={(value) => setFilterCategory(value)}
      />
      <ImageSizeController
        columnNumber={columnNumber}
        onColumnsChange={(value) => setColumnNumber(value)}
        dataLength={dataLength}
        isNarrowScreen={false}
      />
      <Fade duration={2.5}>
        <ImageGallery itemsData={filteredData} columnNumber={columnNumber} />
      </Fade>
    </div>
  );
}
