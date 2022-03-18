import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import { useSelector } from "react-redux";

const EssentialComposers = () => {
  const { essential, isLoading } = useSelector((state) => state.composers);
  return (
    <Essential>
      <h2>Essential Composers</h2>
      <Carousel list={essential} isLoading={isLoading} />
    </Essential>
  );
};

const Essential = styled(motion.div)`
  width: 100%;
  max-width: 1440px;
  position: relative;
  h2 {
    color: ${({ theme }) => theme.highlight};
  }
`;

export default EssentialComposers;
