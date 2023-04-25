import { useState } from "react";

function LazyImage({ src, alt, srcSet, loading, style }) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      {!loaded && <span>Loading</span>}
      <img
        src={src}
        alt={alt}
        onLoad={handleLoad}
        //
        srcSet={srcSet}
        loading={loading}
        style={style}
      />
    </>
  );
}

export default LazyImage;
