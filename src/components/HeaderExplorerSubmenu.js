import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { exploreNavClose } from "../redux/actions/toggleAction";
import { lineAnimation, submenuAnimation } from "../util/animations";

const HeaderExplorerSubmenu = ({ submenuPosition }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigation = (target) => {
    navigate(`/explorer/${target}`);
    dispatch(exploreNavClose());
  };

  return (
    <ExploreSubmenu
      variants={submenuAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className={submenuPosition}
    >
      <ul className="submenu">
        <motion.li
          variants={lineAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={() => handleNavigation("period")}
        >
          By Period
        </motion.li>
        <motion.li
          variants={lineAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={() => handleNavigation("composer")}
        >
          By Composer
        </motion.li>
      </ul>
    </ExploreSubmenu>
  );
};

const ExploreSubmenu = styled(motion.div)`
  background-color: ${({ theme }) => theme.headerText};
  padding: 1rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  width: 10rem;

  &.relative {
    position: relative;
    left: -2rem;
  }

  &.absolute {
    position: absolute;
  }

  .submenu {
    display: flex;
    flex-direction: column;
    gap: 0;
    li {
      color: ${({ theme }) => theme.highlight};
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default HeaderExplorerSubmenu;
