import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

// import itemsData from "../assets/images.json";
// import testData from "../assets/images.json";

export default function ImageGallery({ imgSize }) {
  return (
    <Box sx={{ margin: "auto", width: 500, height: 650, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={imgSize} gap={10}>
        {itemsData.map((item) => {
          return (
            <ImageListItem key={item.name}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                // src="../assets/images/Reg_balcony_strech.jpg"
                // srcSet="../assets/images/Reg_balcony_strech.jpg"
                // src={require(`${item.img}`)}
                // srcSet={require(`${item.img}`)}
                // src={`${item.img}`}
                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                // src={`${process.env.PUBLIC_URL}${item.url}?w=248&fit=crop&auto=format`}
                // srcSet={`${process.env.PUBLIC_URL}${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                // src={`${process.env.PUBLIC_URL}${item.url}?w=248&fit=crop&auto=format`}
                // srcSet={`${process.env.PUBLIC_URL}${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
        {/* {images.map((image) => (
          <img key={image.name} src={image.url} alt={image.name} />
        ))} */}
      </ImageList>
    </Box>
  );
}

const itemsData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
