import { Button, ButtonGroup, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)({ color: "#6096B4" });

export default function CategoryFilter({ categories, onChange }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10px",
        "& > *": {
          // targets all direct children
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="categories button group">
        {categories.map((category) => (
          <StyledButton
            key={category}
            value={category}
            onClick={(event) => onChange(event.target.value)}
          >
            {category}
          </StyledButton>
        ))}
      </ButtonGroup>
    </Box>
  );
}
