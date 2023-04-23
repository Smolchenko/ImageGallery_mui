import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const StyledSlider = styled(Slider)({
  color: "#BDCDD6",
  height: 8,
});

export default function ImageSizeController({
  imgSize,
  onColumnsChange,
  disable,
}) {
  const handleChange = (event, newValue) => {
    onColumnsChange(newValue);
  };

  return (
    <Box sx={{ margin: "auto", width: 200 }}>
      <StyledSlider
        aria-label="Columns"
        // getAriaValueText={valuetext}
        // defaultValue={imgSize}
        valueLabelDisplay="auto"
        marks
        step={1}
        min={1}
        max={5}
        disabled={disable}
        value={imgSize}
        onChange={handleChange}
      />
    </Box>
  );
}
