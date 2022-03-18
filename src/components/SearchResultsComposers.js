import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import ComposerCard from "./ComposerCard";

const SearchResultsComposers = ({ array }) => {
  console.log(array);
  return (
    <StyledSearchResultsComposers>
      <h3>Composers:</h3>
      {array.length ? (
        <div className="composer-list">
          {array.map((e) => (
            <ComposerCard composer={e} key={e.id} />
          ))}
        </div>
      ) : (
        <p>No composer was found with the search terms, try again.</p>
      )}
    </StyledSearchResultsComposers>
  );
};

const StyledSearchResultsComposers = styled(motion.div)`
  border-bottom: 2px solid ${({ theme }) => theme.text};
  padding-bottom: 1rem;
  .composer-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export default SearchResultsComposers;
