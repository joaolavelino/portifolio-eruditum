import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import openOpus from "../media/openOpus.png";
import { pageAnimation } from "../util/animations";

const OpenOpus = () => {
  return (
    <StyledOpenOpus
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>About</h2>
      <div className="openopus-columns">
        <div className="openopus-left">
          <p>
            This project was born in the context of my Web-development learning
            process and my will to dive deeper into classical music. When I
            found the Open Opus API it was a perfect match.
          </p>
          <p>
            This project was built so more people can discover other pieces of
            classical music than those that are played on the mainstream media
            and weddings.
          </p>
          <p>
            The name <span>Eruditum</span> comes from the broad portuguese term
            to classical music: ”Música erudita”. This comes from the latin verb
            <i> erudire</i>, that means to educate. So it's combination of those
            two: A platform were we can educate ourselves a little more about
            classical music and it's many composers.
          </p>
          <p>I hope you enjoy the discovery as much as I did!</p>
        </div>
        <div className="openopus-right">
          <div className="highlight-div">
            <img src={openOpus} alt="" />
            <p className="api-description">
              Open Opus is a free API that contains metadata for classical
              music. If you like this project and you are able to, support Open
              Opus on Patreon, but also with information and with their code.
              All info is available on their website.
            </p>
          </div>

          <a href="https://openopus.org/" target="_blank" rel="noreferrer">
            <button className="full highlight">Open Opus website</button>
          </a>
        </div>
      </div>
    </StyledOpenOpus>
  );
};

const StyledOpenOpus = styled(motion.main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .openopus-columns {
    display: flex;
    gap: 5rem;
    align-items: flex-start;
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }

    .openopus-left,
    .openopus-right {
      width: calc(50% - 5rem);
      display: flex;
      flex-direction: column;
      gap: 2rem;
      @media screen and (max-width: 900px) {
        width: 100%;
      }
    }
    .openopus-right {
      justify-content: space-between;
    }
  }
  .highlight-div {
    width: 100%;
    padding: 3rem;
    background-color: ${({ theme }) => theme.highlight};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .api-description {
    color: ${({ theme }) => theme.headerText};
  }
`;

export default OpenOpus;
