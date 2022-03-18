import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import PieceCard from "./PieceCard";

const SearchResultsPieces = ({ array }) => {
  return (
    <StyledSearchResultsPieces>
      <h3>Pieces:</h3>
      <div className="piece-list">
        {array.map((e) => (
          <PieceCard piece={e} key={e.work.id} />
        ))}
      </div>
    </StyledSearchResultsPieces>
  );
};

const StyledSearchResultsPieces = styled(motion.div)`
  .piece-list {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;
  }
`;

export default SearchResultsPieces;
