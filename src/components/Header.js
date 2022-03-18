import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderNav from "./HeaderNav";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { mobileNav as mobileNavAction } from "../redux/actions/toggleAction";
import HeaderNavMobile from "./HeaderNavMobile";
import { AnimatePresence } from "framer-motion";

const Header = ({ theme, toggleTheme }) => {
  const dispatch = useDispatch();
  const { mobileNav } = useSelector((state) => state.toggle);

  const handleMobileNav = () => {
    dispatch(mobileNavAction());
  };

  return (
    <HeaderStyled>
      <div className="interface">
        <div className="header-left">
          <Link to="/">
            <h1>Eruditum</h1>
          </Link>
        </div>
        <div className="header-right">
          <HeaderNav className="desktop-nav" />
          <AiOutlineMenu className="mobile-nav" onClick={handleMobileNav} />
          <AnimatePresence>
            {mobileNav && (
              <HeaderNavMobile theme={theme} toggleTheme={toggleTheme} />
            )}
          </AnimatePresence>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  width: 100vw;
  height: 80px;
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.highlight};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  .interface {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-right {
    display: flex;
    gap: 1.5rem;
    align-items: center;
  }

  .mobile-nav {
    transition: 0.2s;
    font-size: 1.5rem;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 767px) {
    .mobile-nav {
      display: none;
    }
  }
`;

export default Header;
