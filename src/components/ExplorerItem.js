import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { explorerSelect } from "../redux/actions/explorerAction";
import {
  composerByLetter,
  composerByPeriod,
} from "../redux/actions/composersAction";
import styled from "styled-components";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const ExplorerItem = ({ children, title, type }) => {
  const dispatch = useDispatch();
  const { selected } = useSelector((state) => state.explorer);

  const conditionalDispatch = () => {
    if (type === "periods") return dispatch(composerByPeriod(title));
    else return dispatch(composerByLetter(title));
  };

  const listTitleToggle = (e) => {
    if (title === selected) {
      dispatch(explorerSelect(""));
    } else {
      dispatch(explorerSelect(title));
      conditionalDispatch();
    }
  };

  return (
    <ExplorerItemStyled layout className="title">
      <div className="title" onClick={() => listTitleToggle()}>
        <motion.h4 layout>{title}</motion.h4>
        {selected === title ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      {selected === title ? children : ""}
    </ExplorerItemStyled>
  );
};

const ExplorerItemStyled = styled(motion.div)`
  border-bottom: 2px solid ${({ theme }) => theme.text};
  padding: 1rem 0;
  .title {
    display: flex;
    gap: 1rem;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.text};
    }
  }
  .composers {
    display: flex;
    padding: 1rem 0rem 2rem;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export default ExplorerItem;
