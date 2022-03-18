import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { youtubeLink } from "../util/youtubeLink";

const PieceCard = ({ piece }) => {
  return (
    <StyledPieceCard className="shadow">
      <div className="piece-card-left">
        <h4>{piece.work.title}</h4>
        <h4 className="highlight">{piece.composer.complete_name}</h4>
      </div>
      <div className="piece-card-right">
        <a
          href={youtubeLink(piece.composer.name, piece.work.title)}
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn-small">Youtube</button>
        </a>
      </div>
    </StyledPieceCard>
  );
};

const StyledPieceCard = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.shadow};
`;

export default PieceCard;
