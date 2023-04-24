import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const StyledSlider = styled(Slider)({
  color: "#BDCDD6",
  height: 8,
});

const MAX_COLUMNS_SMALL_SCREEN = 3;
const MAX_COLUMNS_BIG_SCREEN = 5;
const MIN_COLUMNS_ALL_SCREENS = 1;
const MIN_STEPS_ALL_SCREENS = 1;

export default function ImageSizeController({
  imgSize, // 2
  onColumnsChange,
  disable,
  dataLength, // big
}) {
  const handleChange = (event, newValue) => {
    onColumnsChange(newValue);
  };

  const columnAmountBigScreen = Math.min(MAX_COLUMNS_BIG_SCREEN, dataLength);
  const columnAmountSmallScreen = Math.min(
    MAX_COLUMNS_SMALL_SCREEN,
    dataLength
  );

  return (
    <Box sx={{ margin: "auto", width: 200 }}>
      <StyledSlider
        aria-label="Columns"
        // getAriaValueText={valuetext}
        // defaultValue={imgSize}
        // valueLabelDisplay="off"
        valueLabelDisplay="auto"
        marks
        step={MIN_STEPS_ALL_SCREENS}
        min={MIN_COLUMNS_ALL_SCREENS}
        // max={5}
        // max={window.innerWidth <= 600 ? 3 : 5}
        max={
          window.innerWidth <= 600
            ? columnAmountSmallScreen
            : columnAmountBigScreen
        }
        disabled={disable}
        value={imgSize}
        onChange={handleChange}
      />
    </Box>
  );
}
