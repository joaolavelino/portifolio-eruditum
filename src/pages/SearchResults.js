import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import SearchResultsTrue from "../components/SearchResultsTrue";
import { omnisearch } from "../redux/actions/searchAction";
import { pageAnimation } from "../util/animations";

const SearchResults = () => {
  const { terms } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(omnisearch(terms));
  });

  return (
    <StyledSearchResults
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="header">
        <h2>Search Results</h2>
        <h4>{`You searched for: "${terms}"`}</h4>

        <SearchBar />
      </div>
      <section>
        <SearchResultsTrue />
      </section>
    </StyledSearchResults>
  );
};

const StyledSearchResults = styled(motion.main)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default SearchResults;
