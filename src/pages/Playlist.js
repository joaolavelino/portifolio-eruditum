import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import PlaylistCard from "../components/PlaylistCard";
import playlists from "../util/playlists.json";
import { pageAnimation } from "../util/animations";

const Playlists = () => {
  return (
    <StyledPlaylist
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h2>Playlists</h2>
      {playlists.map((e, index) => (
        <PlaylistCard
          title={e.title}
          author={e.author}
          url={e.url}
          key={index}
        />
      ))}
    </StyledPlaylist>
  );
};

const StyledPlaylist = styled(motion.main)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default Playlists;
