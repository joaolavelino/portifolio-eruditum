import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const PlaylistCard = ({ title, author, url }) => {
  return (
    <StyledPlaylistCard className="shadow">
      <div className="playlist-half">
        <h3>{title}</h3>
        <h4>{author}</h4>
      </div>
      <div className="playlist-half">
        <iframe
          height="315"
          src={`https://www.youtube.com/embed/videoseries?list=${url}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </StyledPlaylistCard>
  );
};

const StyledPlaylistCard = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 1rem;
  }

  iframe {
    width: 100%;
    min-width: 540px;
    @media screen and (max-width: 650px) {
      min-width: 0;
    }
  }
`;

export default PlaylistCard;
