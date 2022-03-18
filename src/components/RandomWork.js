import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { LoadingPoints } from "./Loading";
import { useDispatch } from "react-redux";
import { randomWork } from "../redux/actions/worksActions";
import RandomWorkCard from "./RandomWorkCard";

const RandomWork = () => {
  const { random, isLoading } = useSelector((state) => state.works);

  const dispatch = useDispatch();

  function RandomRefresh() {
    dispatch(randomWork());
  }

  return (
    <RandomWorkContainer>
      <h2>Here's a Random Piece!</h2>
      {!isLoading ? (
        <RandomWorkCard random={random} refresh={() => RandomRefresh()} />
      ) : (
        <RandomWorlPlaceholder className="shadow">
          <LoadingPoints />
        </RandomWorlPlaceholder>
      )}
    </RandomWorkContainer>
  );
};

const RandomWorkContainer = styled(motion.section)`
  width: 100%;

  h2 {
    color: ${({ theme }) => theme.highlight};
  }
`;

const RandomWorlPlaceholder = styled(motion.section)`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.shadow};
`;

export default RandomWork;
