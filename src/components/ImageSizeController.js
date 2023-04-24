import { Box, Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSlider = styled(Slider)({
  color: "#BDCDD6",
  height: 8,
  "& .Mui-disabled": { color: "#000" },
});
const MAX_COLUMNS_SMALL_SCREEN = 3;
const MAX_COLUMNS_BIG_SCREEN = 5;
const MIN_COLUMNS_ALL_SCREENS = 1;
const MIN_STEPS_ALL_SCREENS = 1;

function getMaxColums(isNarrowScreen, dataLength) {
  return Math.min(
    isNarrowScreen ? MAX_COLUMNS_SMALL_SCREEN : MAX_COLUMNS_BIG_SCREEN,
    dataLength
  );
}

export default function ImageSizeController({
  columnNumber,
  onColumnsChange,
  dataLength,
  isNarrowScreen,
}) {
  // const columnAmountBigScreen = Math.min(MAX_COLUMNS_BIG_SCREEN, dataLength);
  // const columnAmountSmallScreen = Math.min(
  //   MAX_COLUMNS_SMALL_SCREEN,
  //   dataLength
  // );
  console.log("Slider, dataLength", dataLength);
  console.log("Slider, columnNumber", columnNumber);
  console.log("Slider, isNarrowScreen", isNarrowScreen);

  return (
    <Box sx={{ margin: "auto", width: 200 }}>
      <StyledSlider
        aria-label="Columns"
        // getAriaValueText={valuetext}
        // defaultValue={columnNumber}
        // valueLabelDisplay="off"
        valueLabelDisplay="auto"
        marks
        step={MIN_STEPS_ALL_SCREENS}
        min={Math.min(MIN_COLUMNS_ALL_SCREENS, dataLength - 1)}
        // max={isNarrowScreen ? columnAmountSmallScreen : columnAmountBigScreen}
        // max={getMaxColums(isNarrowScreen, dataLength)}
        max={getMaxColums(isNarrowScreen, dataLength)}
        // max={5}
        disabled={dataLength <= 1}
        value={columnNumber}
        onChange={(event, newValue) => onColumnsChange(newValue)}
      />
    </Box>
  );
}
