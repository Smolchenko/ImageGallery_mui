import { useState } from "react";

import CategoryFilters from "./components/CategoryFilters";
import ImageSizeController from "./components/ImageSizeController";
import ImageGallery from "./components/ImageGallery";

import Fade from "./animation/Fade";
import "./styles.css";

export default function App() {
  const [imgSize, setImgSize] = useState(3);
  // disable if there is only one image, to make the slider 'disabled'
  const disableColumns = false;

  return (
    <div className="App">
      <CategoryFilters />
      <ImageSizeController
        imgSize={imgSize}
        onColumnsChange={(val) => setImgSize(val)}
        disable={disableColumns}
      />
      <Fade duration={2.5}>
        <ImageGallery imgSize={imgSize} />
      </Fade>
    </div>
  );
}
