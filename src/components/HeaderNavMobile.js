import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import HeaderNavUl from "./HeaderNavUl";
import { useDispatch, useSelector } from "react-redux";
import {
  exploreNav as exploreNavAction,
  mobileNav as mobileNavAction,
} from "../redux/actions/toggleAction";
import ThemeToggle from "./ThemeToggle";
import { mobileNavAnimation } from "../util/animations";

const HeaderNavMobile = ({ theme, toggleTheme }) => {
  const dispatch = useDispatch();
  const { exploreNav } = useSelector((state) => state.toggle);

  const [hover, setHover] = useState("");

  const toggleExplorer = () => {
    dispatch(exploreNavAction());
  };
  const toggleMobile = () => {
    dispatch(mobileNavAction());
  };
  return (
    <StyledHeaderNavMobile
      variants={mobileNavAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="nav-mobile-header">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <AiOutlineClose onClick={toggleMobile} className="nav-mobile-close" />
      </div>
      <HeaderNavUl
        toggleExplorer={toggleExplorer}
        exploreNav={exploreNav}
        hover={hover}
        setHover={setHover}
        submenuPosition="relative"
      />
    </StyledHeaderNavMobile>
  );
};

const StyledHeaderNavMobile = styled(motion.nav)`
  position: fixed;
  right: 1rem;
  top: -1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 10rem;
  padding: 3rem 2rem 1rem;
  background-color: ${({ theme }) => theme.highlight};

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);

  .nav-mobile-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-mobile-close {
      font-size: 1.5rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    li {
      cursor: pointer;
      .li-explore {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }

  .li-underline {
    height: 2px;
    transition: 0.2s;
    background-color: ${({ theme }) => theme.headerText};
    &.hide {
      width: 0;
      opacity: 0;
    }
    &.show {
      width: 100%;
      opacity: 1;
    }
  }
`;

export default HeaderNavMobile;
