import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ComposerCard = ({ composer }) => {
  return (
    <Link to={`/composer/${composer.id}`}>
      <Card className="card" onClick={() => console.log(composer.id)}>
        <img src={composer.portrait} alt={`Portrait of ${composer.name}`} />
        <div className="card-name">
          <h5>{composer.name}</h5>
        </div>
      </Card>
    </Link>
  );
};

const Card = styled(motion.div)`
  width: 160px;
  flex: none;
  height: 160px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: 0.5s all ease;
    :hover {
      transform: scale(1.2);
    }
  }

  .card-name {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);

    h5 {
      color: white;
    }
  }
`;

export default ComposerCard;
