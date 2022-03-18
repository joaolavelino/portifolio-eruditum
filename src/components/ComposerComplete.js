import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { LoadingPoints } from "./Loading";
import { motion } from "framer-motion";
import PieceList from "./PieceList";
import { Link } from "react-router-dom";
import { pageAnimation } from "../util/animations";

const ComposerComplete = () => {
  const { byComposer, isLoading } = useSelector((state) => state.works);
  const { byId } = useSelector((state) => state.composers);

  return (
    <ComposerCompleteStyled
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {!isLoading ? (
        <div className="works-card shadow">
          <div className="works-card-header">
            <h3>{`Complete catalogue by ${byId.name}`}</h3>
            <Link to={`/composer/${byId.id}`}>
              <button className="highlight">Back</button>
            </Link>
          </div>
          {byComposer.length ? (
            <PieceList array={byComposer} composer={byId} />
          ) : (
            <p>
              <i>{`Sorry, the API didn't find anything here.`}</i>
            </p>
          )}
        </div>
      ) : (
        <ComposerCompletePlaceholder>
          <LoadingPoints />
        </ComposerCompletePlaceholder>
      )}
    </ComposerCompleteStyled>
  );
};

const ComposerCompleteStyled = styled(motion.main)`
  .works-card {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${({ theme }) => theme.shadow};
    padding: 2rem 2rem;
    gap: 2rem;
  }

  .works-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      color: ${({ theme }) => theme.highlight};
    }
  }
`;
const ComposerCompletePlaceholder = styled(motion.section)``;

export default ComposerComplete;
