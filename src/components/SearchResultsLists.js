import React from "react";
import SearchResultsComposers from "./SearchResultsComposers";
import SearchResultsPieces from "./SearchResultsPieces";
import styled from "styled-components";

const SearchResultsLists = ({ results }) => {
  console.log(results);
  console.log("oi");
  const composersResultsFull = results.filter((e) => e.work == null);
  const composersResults = composersResultsFull.map((e) => e.composer);
  const piecesResults = results.filter((e) => e.work != null);
  console.log(composersResults);
  console.log(piecesResults);

  return (
    <section>
      <StyledSearchResultsLists>
        <>
          <SearchResultsComposers array={composersResults} />
          <SearchResultsPieces array={piecesResults} />
        </>
      </StyledSearchResultsLists>
    </section>
  );
};

const StyledSearchResultsLists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default SearchResultsLists;
