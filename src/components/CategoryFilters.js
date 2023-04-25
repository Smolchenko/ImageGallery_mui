import { useState } from "react";
import { Button, ButtonGroup, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

import { categories } from "../assets/data";

export default function CategoryFilter({ onChange, filterCategory }) {
  const [active, setActive] = useState(filterCategory);

  const handleClick = (event) => {
    const {
      target: { value },
    } = event;

    onChange(value);
    setActive(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "10px",
        "& > *": { m: 1 },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="categories button group">
        {categories.map((category) => (
          <StyledButton
            key={category}
            value={category}
            onClick={handleClick}
            sx={{
              color: active === category && "#65647C",
              fontWeight: active === category && "bold",
            }}
          >
            {category}
          </StyledButton>
        ))}
      </ButtonGroup>
    </Box>
  );
}

const StyledButton = styled(Button)({ color: "#6096B4" });
