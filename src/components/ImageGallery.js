import { Box, ImageList, ImageListItem } from "@mui/material";

export default function ImageGallery({ itemsData, columnNumber }) {
<<<<<<< HEAD
=======
  console.log("columnNumber from gallery", columnNumber);
>>>>>>> remove-comments-and-unrelated
  return (
    <Box
      sx={{
        margin: "20px auto",
        width: 550,
        minWidth: "80vw",
        maxWidth: "fit-content",
        height: 550,
        minHeight: "80vh",
        overflowY: "scroll",
      }}
    >
      <ImageList variant="masonry" cols={columnNumber} gap={10}>
        {itemsData.map((item) => {
          return (
            <ImageListItem key={item.title}>
              <a
                href={item.img}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block" }}
              >
                <img
                  src={`${item.img}?w=348&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=348&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </a>
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
}
