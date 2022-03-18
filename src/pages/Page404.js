import { motion } from "framer-motion";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { pageAnimation } from "../util/animations";

const Page404 = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 5000);

  return (
    <StyledPage404
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>404</h2>
      <h3>Page not found</h3>
      <h4>
        You're going to be redirected to the home automatically. If it doesn't
        happen <Link to="/"> click here</Link> .
      </h4>
    </StyledPage404>
  );
};

const StyledPage404 = styled(motion.main)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  a {
    color: ${({ theme }) => theme.highlight};
    transition: 0.2s;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Page404;
