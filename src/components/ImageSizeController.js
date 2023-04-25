import { Box, Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledSlider = styled(Slider)({
  color: "#BDCDD6",
  height: 8,
  "& .Mui-disabled": { color: "#000" },
});

export default function ImageSizeController({
  galleryColumns,
  onColumnsChange,
  dataLength,
  isNarrowScreen,
}) {
  return (
    <Box sx={{ margin: "auto", width: 200 }}>
      <StyledSlider
        value={galleryColumns}
        onChange={(event, newValue) => onColumnsChange(newValue)}
        disabled={dataLength <= 1}
        marks
        step={MIN_STEPS_ALL_SCREENS}
        min={Math.min(MIN_COLUMNS_ALL_SCREENS, dataLength - 1)}
        max={getMaxColums(isNarrowScreen, dataLength)}
        aria-label="Columns selector"
        getAriaValueText={(value) => `${value} columns`}
        // getAriaValueText is used to provide a textual representation of the current 'value' of a Slider component for accessibility purposes
        // It is not dependent on valueLabelDisplay,
        // valueLabelDisplay="off"
        valueLabelDisplay="auto"
      />
    </Box>
  );
}

function getMaxColums(isNarrowScreen, dataLength) {
  return Math.min(
    isNarrowScreen ? MAX_COLUMNS_SMALL_SCREEN : MAX_COLUMNS_BIG_SCREEN,
    dataLength
  );
}

const MAX_COLUMNS_SMALL_SCREEN = 3;
const MAX_COLUMNS_BIG_SCREEN = 5;
const MIN_COLUMNS_ALL_SCREENS = 1;
const MIN_STEPS_ALL_SCREENS = 1;
