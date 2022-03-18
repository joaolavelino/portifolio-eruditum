import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchBar = () => {
  let navigate = useNavigate();
  const [terms, setTerms] = useState("");

  const handleChange = (e) => {
    setTerms(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`searched for ${terms}`);
    navigate(`/search/${terms}`);
  };

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <div className="input-line">
        <input
          type="text"
          name="search"
          id=""
          className="full"
          placeholder="Search for composer or piece"
          onChange={handleChange}
        />
        <button className="btn-form">Search</button>
      </div>
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled(motion.form)`
  position: relative;

  button {
    position: absolute;
    right: 0;
  }
`;

export default SearchBar;
