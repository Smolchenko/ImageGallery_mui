import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)({
  color: "#6096B4",
  height: 40,
});

export default function CategoryFilter({ categories, onChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10px",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        {categories.map((category) => (
          <StyledButton
            key={category}
            onClick={(event) => onChange(event.target.value)}
            value={category}
          >
            {category}
          </StyledButton>
        ))}
      </ButtonGroup>
    </Box>
  );
}
