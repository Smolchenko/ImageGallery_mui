import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ImageGallery({ itemsData, imgSize }) {
  return (
    <Box
      sx={{
        margin: "20px auto",
        width: 550,
        minWidth: "80vw",
        height: 550,
        minHeight: "80vh",
        maxWidth: "fit-content",
        overflowY: "scroll",
      }}
    >
      <ImageList variant="masonry" cols={imgSize} gap={10}>
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
