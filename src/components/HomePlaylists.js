import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import playlists from "../util/playlists.json";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const HomePlaylists = () => {
  const [index, setIndex] = useState(0);
  const playlist = playlists[index];

  const handleNext = () => {
    index < playlists.length - 1 ? setIndex(index + 1) : setIndex(0);
  };
  const handlePrevious = () => {
    index === 0 ? setIndex(playlists.length - 1) : setIndex(index - 1);
  };

  return (
    <StyledHomePlaylists>
      <h2>Playlists</h2>
      <div className="playlists-card shadow">
        <div className="playlists-left">
          <div className="info">
            <h4 className="highlight">Now playing:</h4>
            <h3>{playlist.title}</h3>
            <h4>{playlist.author}</h4>
          </div>
          <div className="player">
            <AiOutlineLeft onClick={handlePrevious} />
            <AiOutlineRight onClick={handleNext} />
          </div>
          <Link to="/playlists">
            <button>Check All Playlists</button>
          </Link>
        </div>
        <div className="playlists-right">
          <iframe
            src={`https://www.youtube.com/embed/videoseries?list=${playlist.url}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </StyledHomePlaylists>
  );
};

const StyledHomePlaylists = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  .playlists-card {
    display: flex;
    justify-content: space-between;
    height: 250px;
  }
  .playlists-left {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1rem;
    justify-content: space-between;
  }

  .player {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.text};
    font-size: 2rem;
    svg {
      transition: 0.2s;
      &:hover {
        transform: scale(1.2);
        color: ${({ theme }) => theme.highlight};
      }
    }
  }
  .playlists-right {
    width: 100%;
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
`;

export default HomePlaylists;
