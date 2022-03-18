import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import EssentialComposers from "../components/EssentialComposers";
import ExploreHome from "../components/Explore";
import HomePlaylists from "../components/HomePlaylists";
import RandomWork from "../components/RandomWork";
import { essentialComposers } from "../redux/actions/composersAction";
import { exploreNavClose } from "../redux/actions/toggleAction";
import { randomWork } from "../redux/actions/worksActions";
import { pageAnimation } from "../util/animations";

const Home = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("home-page useEffect");
    dispatch(essentialComposers());
    dispatch(randomWork());
    dispatch(exploreNavClose());
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      {!loading && (
        <HomeMain
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="home-middle">
            <div className="home-left">
              <h3>Welcome to Eruditum, the online Classical Music guide.</h3>
              <ExploreHome />
            </div>
            <div className="home-right">
              <RandomWork />
              <HomePlaylists />
            </div>
          </div>
          <div className="bottom">
            <EssentialComposers />
          </div>
        </HomeMain>
      )}
    </>
  );
};

const HomeMain = styled(motion.main)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: space-between;

  .home-middle {
    display: flex;
    gap: 8rem;
    @media screen and (max-width: 1079px) {
      flex-direction: column-reverse;
    }
  }
  .home-left {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: calc(40% - 4rem);
    @media screen and (max-width: 1079px) {
      width: 100%;
    }
    h3 {
      padding-top: 1rem;
    }
  }
  .home-right {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media screen and (max-width: 1079px) {
      width: 100%;
    }
  }
`;

export default Home;
