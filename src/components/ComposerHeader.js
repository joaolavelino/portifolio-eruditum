import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { LoadingPoints } from "./Loading";
import { motion } from "framer-motion";
import ComposerHeaderInfo from "./ComposerHeaderInfo";

const ComposerHeader = () => {
  const { byId, isLoading } = useSelector((state) => state.composers);

  return (
    <ComposerHeaderStyled>
      {!isLoading ? (
        <div className="composer-card shadow">
          <div className="composer-left">
            <img src={byId.portrait} alt={`Portrait of ${byId.name}`} />
          </div>
          <ComposerHeaderInfo byId={byId} />
        </div>
      ) : (
        <ComposerHeaderPlaceholder>
          <LoadingPoints />
        </ComposerHeaderPlaceholder>
      )}
    </ComposerHeaderStyled>
  );
};

const ComposerHeaderStyled = styled(motion.section)`
  .composer-card {
    display: flex;
    width: 100%;
    height: 200px;

    @media screen and (max-width: 550px) {
      height: auto;
      flex-direction: column;
    }
  }
  .composer-left {
    height: 200px;
    width: 200px;
    overflow: hidden;
    @media screen and (max-width: 550px) {
      width: 100%;
    }
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .composer-card-right {
    width: calc(100% - 200px);
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;
    @media screen and (max-width: 550px) {
      height: auto;
      width: 100%;
      padding: 2rem;
    }

    @media screen and (max-width: 1080px) {
      h2 {
        font-size: 2rem;
      }
    }
  }
  .composer-card-right-bottom {
    display: flex;
    gap: 2rem;
    @media screen and (max-width: 550px) {
      height: auto;
      flex-direction: column;
    }
  }

  .composer-date {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.text};
  }
`;
const ComposerHeaderPlaceholder = styled(motion.section)``;

export default ComposerHeader;
