import { Box, ImageList, ImageListItem } from "@mui/material";
import LazyImage from "./LazyImage";

export default function ImageGallery({ items, galleryColumns }) {
  return (
    <Box
      sx={{
        margin: "20px auto",
        overflowY: "scroll",
        height: "80vh",
        maxWidth: { md: "75vw" },
      }}
    >
      <ImageList variant="masonry" cols={galleryColumns} gap={10}>
        {items.map((item) => {
          return (
            <ImageListItem key={item.title}>
              <a
                href={item.img}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                <LazyImage
                  src={`${item.img}?w=348&fit=crop&auto=format`}
                  alt={item.title}
                  srcSet={`${item.img}?w=348&fit=crop&auto=format&dpr=2 2x`}
                  loading="lazy"
                  // With loading="lazy", the image will only load when it is about to come into view. This can significantly improve the performance of the page by reducing the amount of data that needs to be loaded initially.
                  // When an image with loading="lazy" is encountered, the browser will defer loading the image until it is close to being visible in the viewport.
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {/* <img
                  src={`${item.img}?w=348&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=348&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                /> */}
              </a>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
}
