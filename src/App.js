import { useState, useEffect } from "react";

import CategoryFilters from "./components/CategoryFilters";
import ImageSizeController from "./components/ImageSizeController";
import ImageGallery from "./components/ImageGallery";
import { itemsData, categories } from "./assets/data";

import Fade from "./animation/Fade";
import "./styles.css";

const ALL_CATEGORIES = categories[3];

export default function App() {
  const [filterCategory, setFilterCategory] = useState(ALL_CATEGORIES);
  const filteredData =
    filterCategory === ALL_CATEGORIES
      ? itemsData
      : itemsData.filter((item) => item.type.includes(filterCategory));
  const dataLength = filteredData.length;
  const [selectedColumns, setSelectedColumns] = useState(3);

  const getAdjustedDisplayAmount = () => {
    return Math.min(dataLength, window.innerWidth <= 600 ? 2 : selectedColumns);
  };
  const [galleryColumns, setGalleryColumns] = useState(() =>
    getAdjustedDisplayAmount()
  );

  useEffect(() => {
    setGalleryColumns(getAdjustedDisplayAmount());
  }, [filterCategory]);

  useEffect(() => {
    const handleResize = () => {
      setGalleryColumns(getAdjustedDisplayAmount());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dataLength, selectedColumns]);

  return (
    <div className="App">
      <CategoryFilters
        onChange={(value) => setFilterCategory(value)}
        filterCategory={filterCategory}
      />
      <ImageSizeController
        galleryColumns={galleryColumns}
        onColumnsChange={(value) => {
          setGalleryColumns(value);
          setSelectedColumns(value);
        }}
        dataLength={dataLength}
        isNarrowScreen={window.innerWidth <= 600}
      />
      <Fade duration={2.5}>
        <ImageGallery items={filteredData} galleryColumns={galleryColumns} />
      </Fade>
    </div>
  );
}
