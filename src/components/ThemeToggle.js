import { motion } from "framer-motion";
import React from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import styled from "styled-components";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <ThemeToggleStyled onClick={toggleTheme}>
      {theme === "dark" && <BsFillSunFill />}
      {theme === "light" && <BsFillMoonFill />}
    </ThemeToggleStyled>
  );
};

const ThemeToggleStyled = styled(motion.div)`
  svg {
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export default ThemeToggle;
