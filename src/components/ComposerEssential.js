import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { LoadingPoints } from "./Loading";
import { motion } from "framer-motion";
import PieceList from "./PieceList";
import { Link, useParams } from "react-router-dom";

const ComposerEssential = () => {
  const { essentialByComposer, isLoading } = useSelector(
    (state) => state.works
  );
  const { byId } = useSelector((state) => state.composers);
  const { id } = useParams();

  return (
    <ComposerEssentialStyled>
      {!isLoading ? (
        <div className="works-card shadow">
          <div className="works-card-header">
            <h3>Essential Works</h3>
            <Link to={`/composer/${id}/works`}>
              <button className="highlight">Complete catalogue</button>
            </Link>
          </div>
          {essentialByComposer.length ? (
            <PieceList array={essentialByComposer} composer={byId} />
          ) : (
            <p>
              <i>{`Sorry, there aren't any pieces marked as essential on the database, check the complete catalogue using the button above.`}</i>
            </p>
          )}
        </div>
      ) : (
        <ComposerEssentialPlaceholder>
          <LoadingPoints />
        </ComposerEssentialPlaceholder>
      )}
    </ComposerEssentialStyled>
  );
};

const ComposerEssentialStyled = styled(motion.section)`
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
    @media screen and (max-width: 375px) {
      flex-direction: column;
      gap: 1rem;
    }
    h3 {
      color: ${({ theme }) => theme.highlight};
    }
  }
`;
const ComposerEssentialPlaceholder = styled(motion.section)``;

export default ComposerEssential;
