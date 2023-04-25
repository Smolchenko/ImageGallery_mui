import { useState, useEffect } from "react";

import CategoryFilters from "./components/CategoryFilters";
import ImageSizeController from "./components/ImageSizeController";
import ImageGallery from "./components/ImageGallery";
import { itemsData, categories } from "./assets/data";
// The import statement is part of the ES6 module system, which is designed to support asynchronous
// loading of modules. This means that when you use import, the module is loaded asynchronously,
// which can be beneficial for performance.

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
  // const [galleryColumns, setGalleryColumns] = useState((prevValue) =>
  //   getAdjustedDisplayAmount(prevValue)
  // );
  const [galleryColumns, setGalleryColumns] = useState(() =>
    getAdjustedDisplayAmount()
  );

  // function getAdjustedDisplayAmount(prevValue) {
  //   return prevValue || Math.min(dataLength, window.innerWidth <= 600 ? 2 : 3);
  // }
  function getAdjustedDisplayAmount() {
    return Math.min(dataLength, window.innerWidth <= 600 ? 2 : 3);
  }

  useEffect(() => {
    const handleResize = () => {
      setGalleryColumns(getAdjustedDisplayAmount); // does the same as the below, is it because of the return?
      // setGalleryColumns(getAdjustedDisplayAmount());
    };
    window.addEventListener("resize", handleResize);
    //   window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      //     window.removeEventListener("orientationchange", handleResize);
    };
  }, [dataLength]);
  // }, [dataLength, filterCategory]);

  // useEffect(() => {
  //   // setGalleryColumns((prevValue) => getAdjustedDisplayAmount(prevValue));
  //   setGalleryColumns(getAdjustedDisplayAmount());
  //   console.log("useEffect2 is running");
  // }, [dataLength, filterCategory]);
  // // }, []);

  return (
    <div className="App">
      <CategoryFilters
        onChange={(value) => setFilterCategory(value)}
        filterCategory={filterCategory}
      />
      <ImageSizeController
        galleryColumns={galleryColumns}
        onColumnsChange={(value) => setGalleryColumns(value)}
        dataLength={dataLength}
        isNarrowScreen={window.innerWidth <= 600}
      />
      <Fade duration={2.5}>
        <ImageGallery items={filteredData} galleryColumns={galleryColumns} />
      </Fade>
    </div>
  );
}

// TODO:
// [V] 1. Add active state to the selected CategoryFilter

// 2. In case - FUNNY, col = 4, switch to INSPECTOR -> I expect the col to stay at the last selected
// unless it's not possible

// 2.1 Select ANY CATEGORY, Select 3 columns. Tilt the phone and whatch he columns go down. Tilt back then don't go back

// 3. Upon phone tilt, show all available/ adjust the column selector options.
// maybe isNarrowScreen should be affected by it as well

// [V] 4. Find out what is: "loading="lazy"" and alternatevely create a size for the loading img div to be the
// size of the image
