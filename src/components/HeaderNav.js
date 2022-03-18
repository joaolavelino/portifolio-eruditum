import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { exploreNav as exploreNavAction } from "../redux/actions/toggleAction";
import HeaderNavUl from "./HeaderNavUl";

const HeaderNav = () => {
  const dispatch = useDispatch();
  const { exploreNav } = useSelector((state) => state.toggle);

  const [hover, setHover] = useState("");

  const toggleExplorer = () => {
    dispatch(exploreNavAction());
  };

  return (
    <StyledHeaderNav>
      <HeaderNavUl
        toggleExplorer={toggleExplorer}
        exploreNav={exploreNav}
        hover={hover}
        setHover={setHover}
        submenuPosition="absolute"
      />
    </StyledHeaderNav>
  );
};

const StyledHeaderNav = styled(motion.nav)`
  @media screen and (max-width: 768px) {
    display: none;
  }

  ul {
    display: flex;
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

export default HeaderNav;
