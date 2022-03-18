import React from "react";
import { youtubeLink } from "../util/youtubeLink";
import { HiRefresh } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const RandomWorkCard = ({ random, refresh }) => {
  return (
    <StyledRandomWorkCard className="shadow">
      <div className="random-left">
        <Link to={`/composer/${random.composer.id}`}>
          <img
            src={random.composer.portrait}
            alt={`Portrait of ${random.composer.name} `}
          />
        </Link>
      </div>
      <div className="random-middle">
        <h4>{random.piece.title}</h4>
        <Link to={`/composer/${random.composer.id}`}>
          <h3>{random.composer.complete_name}</h3>
        </Link>
      </div>
      <div className="random-right">
        <a
          href={youtubeLink(random.composer.name, random.piece.title)}
          target="_blank"
          rel="noreferrer"
        >
          <button>Youtube</button>
        </a>
        <div className="refresh-line" onClick={refresh}>
          <HiRefresh className="body-icon" />
          <h4>Refresh</h4>
        </div>
      </div>
    </StyledRandomWorkCard>
  );
};

const StyledRandomWorkCard = styled(motion.div)`
  width: 100%;

  height: 150px;
  background-color: ${({ theme }) => theme.shadow};
  display: flex;
  justify-content: space-between;
  transition: 0.5s all ease;
  @media screen and (max-width: 600px) {
    height: auto;
    flex-direction: column;
  }

  .random-left,
  .random-right,
  .random-middle {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .random-left {
    overflow: hidden;
    width: 100px;
    height: 100%;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }

  .random-right {
    width: 150px;
    padding: 1rem;
    gap: 1rem;
    align-items: baseline;
    @media screen and (max-width: 600px) {
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }

  .random-middle {
    width: calc(100% - 230px);
    padding: 0.5rem 2rem;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }

  img {
    height: 150px;
    width: 100%;
    transition: 0.5s all ease;
    object-fit: cover;
    :hover {
      transform: scale(1.2);
    }
    cursor: pointer;
  }
  svg {
    font-size: 1.5rem;
  }

  .refresh-line {
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    h4 {
      transition: 0.4s;
    }
    :hover {
      h4,
      svg {
        color: ${({ theme }) => theme.highlight};
        transform: scale(1.1);
      }
    }
  }
`;

export default RandomWorkCard;
