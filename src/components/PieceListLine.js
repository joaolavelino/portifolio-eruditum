import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { youtubeLink } from "../util/youtubeLink";

const PieceListLine = ({ piece, composer }) => {
  return (
    <StyledPieceListLine className="works-card-line">
      <h4>{piece.title}</h4>
      <a
        href={youtubeLink(piece.title, composer.complete_name)}
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn-small">Youtube</button>
      </a>
    </StyledPieceListLine>
  );
};

const StyledPieceListLine = styled(motion.div)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.text};
  padding: 0.5rem 0;
  transition: 0.4s;
  &:hover {
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.highlight};
  }
`;

export default PieceListLine;
