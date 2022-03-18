import React from "react";
import { AnimatePresence } from "framer-motion";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import HeaderExplorerSubmenu from "./HeaderExplorerSubmenu";
import { useDispatch } from "react-redux";
import { mobileNavClose } from "../redux/actions/toggleAction";

const HeaderNavUl = ({
  hover,
  setHover,
  exploreNav,
  toggleExplorer,
  submenuPosition,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMouseEnter = (name) => {
    setHover(name);
  };
  const handleMouseLeave = () => {
    setHover("");
  };

  const handleNavigation = (target) => {
    navigate(target);
    dispatch(mobileNavClose());
  };

  return (
    <ul>
      <li
        onMouseEnter={() => handleMouseEnter("home")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleNavigation("/")}
      >
        Home
        <div className={`li-underline ${hover === "home" ? "show" : "hide"}`} />
      </li>
      <li
        onMouseEnter={() => handleMouseEnter("explore")}
        onMouseLeave={handleMouseLeave}
      >
        <div className="li-explore" onClick={toggleExplorer}>
          Explore
          {exploreNav ? <AiOutlineUp /> : <AiOutlineDown />}
        </div>
        <div
          className={`li-underline ${hover === "explore" ? "show" : "hide"}`}
        />
        <AnimatePresence>
          {exploreNav && (
            <HeaderExplorerSubmenu submenuPosition={submenuPosition} />
          )}
        </AnimatePresence>
      </li>
      <li
        onMouseEnter={() => handleMouseEnter("playlists")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleNavigation("/playlists")}
      >
        Playlists
        <div
          className={`li-underline ${hover === "playlists" ? "show" : "hide"}`}
        />
      </li>
      <li
        onMouseEnter={() => handleMouseEnter("help")}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleNavigation("/open_opus")}
      >
        Open Opus
        <div className={`li-underline ${hover === "help" ? "show" : "hide"}`} />
      </li>
    </ul>
  );
};

export default HeaderNavUl;
