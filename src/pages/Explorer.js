//PAGE EXPLORER//

import { motion } from "framer-motion";
import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import ExplorerList from "../components/ExplorerList";
import { pageAnimation } from "../util/animations";

const Explorer = () => {
  const { type } = useParams();

  const letters = {
    type: "letters",
    list: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
  };

  const periods = {
    type: "periods",
    list: [
      "Medieval",
      "Renaissance",
      "Baroque",
      "Classical",
      "Early Romantic",
      "Romantic",
      "Late Romantic",
      "20th Century",
      "Post-War",
      "21st Century",
    ],
  };

  return (
    <ExplorerStyled
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>Explorer</h2>
      <div className="search-type">
        <h3>Explore by {type}</h3>
        <Link to={`/explorer/${type === "period" ? "composer" : "period"}`}>
          <button className="highlight">
            Explore by {type === "period" ? "composer" : "period"}
          </button>
        </Link>
      </div>
      {type === "period" ? (
        <p>
          Here are the periods of classical music, click to expand and explore
          the main composers of that era.
        </p>
      ) : (
        <p>
          The composers are displayed on alphabetical order. Click on the letter
          to expand.
        </p>
      )}

      <ExplorerList object={type === "period" ? periods : letters} />
    </ExplorerStyled>
  );
};

const ExplorerStyled = styled(motion.main)`
  h2,
  h3 {
    color: ${({ theme }) => theme.highlight};
  }
  .search-type {
    display: flex;
    gap: 3rem;
    margin: 1rem 0;
    @media screen and (max-width: 530px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export default Explorer;
