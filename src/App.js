import { useState, useEffect } from "react";

import CategoryFilters from "./components/CategoryFilters";
import ImageSizeController from "./components/ImageSizeController";
import ImageGallery from "./components/ImageGallery";
import { itemsData } from "./assets/data";

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

  useEffect(() => {
    setColumnNumber(getAdjustedDisplayAmount());
    console.log("useEffect2 is running");
  }, [dataLength, filterCategory]);

  // useEffect(() => {
  //   setColumnNumber(getAdjustedDisplayAmount());
  //   console.log("useEffect3 is running");
  // }, []);

  // useEffect(() => {
  //   function handleResize() {
  //     setColumnNumber(getAdjustedDisplayAmount());
  //     // console.log("useEffect is running");
  //   }
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [dataLength, filterCategory]);

  return (
    <div className="App">
      <CategoryFilters onChange={(value) => setFilterCategory(value)} />
      <ImageSizeController
        columnNumber={columnNumber}
        onColumnsChange={(value) => setColumnNumber(value)}
        dataLength={dataLength}
        isNarrowScreen={window.innerWidth <= 600}
      />
      <Fade duration={2.5}>
        <ImageGallery itemsData={filteredData} columnNumber={columnNumber} />
      </Fade>
    </div>
  );
}
