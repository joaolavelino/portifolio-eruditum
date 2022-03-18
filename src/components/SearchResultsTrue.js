import React from "react";
import { useSelector } from "react-redux";
import { LoadingPoints } from "./Loading";
import SearchResultsLists from "./SearchResultsLists";

const SearchResultsTrue = () => {
  const { searchResults, isLoading } = useSelector((state) => state.search);
  console.log(searchResults);
  return (
    <>
      {!isLoading ? (
        <section>
          <h3>Search Results</h3>
          {searchResults.length ? (
            <SearchResultsLists results={searchResults} />
          ) : (
            <p>
              Sorry, the search returned no results. Please try again with
              different terms.
            </p>
          )}
        </section>
      ) : (
        <LoadingPoints />
      )}
    </>
  );
};

export default SearchResultsTrue;
