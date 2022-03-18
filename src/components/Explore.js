import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const ExploreHome = () => {
  return (
    <ExploreHomeStyled>
      <h2>Explore</h2>
      <p>
        In this section you'll be able to find all the main composers of
        classical music, and explore their work. You can search for a specific
        composer, or search through the multiple periods.
      </p>
      <Link to="/explorer/period">
        <button className="btn-large full highlight">Explore By Period</button>
      </Link>
      <Link to="/explorer/composer">
        <button className="btn-large full highlight">
          Explore By Composer
        </button>
      </Link>
      <SearchBar />
    </ExploreHomeStyled>
  );
};

const ExploreHomeStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: ${({ theme }) => theme.highlight};
  }
`;

export default ExploreHome;
