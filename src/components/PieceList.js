import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import PieceListLine from "./PieceListLine";

const PieceList = ({ array, composer }) => {
  return (
    <StyledPieceList>
      <div className="works-card-body">
        {array.map((e) => (
          <PieceListLine piece={e} key={e.id} composer={composer} />
        ))}
      </div>
    </StyledPieceList>
  );
};

const StyledPieceList = styled(motion.section)`
  .works-card-body {
    display: flex;
    flex-direction: column;
  }
`;

export default PieceList;
