import { Box, Slider } from "@mui/material";
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

  function getMaxColums(isNarrowScreen, dataLength) {
    return Math.min(
      isNarrowScreen ? MAX_COLUMNS_SMALL_SCREEN : MAX_COLUMNS_BIG_SCREEN,
      dataLength
    );
  }

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
        min={MIN_COLUMNS_ALL_SCREENS}
        // max={
        //   window.innerWidth <= 600
        //     ? columnAmountSmallScreen
        //     : columnAmountBigScreen
        // }
        max={getMaxColums(isNarrowScreen, dataLength)}
        // max={5}
        // max={window.innerWidth <= 600 ? 3 : 5}
        disabled={dataLength <= 1}
        value={columnNumber}
        onChange={(event, newValue) => onColumnsChange(newValue)}
      />
    </Box>
  );
}
