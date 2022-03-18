import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaCross } from "react-icons/fa";
import { wikipediaLink } from "../util/wikipediaLink";

const ComposerHeaderInfo = ({ byId }) => {
  return (
    <div className="composer-card-right">
      <h2>{byId.complete_name}</h2>
      <h3>{byId.epoch}</h3>
      <div className="composer-card-right-bottom">
        <div>
          <div className="composer-date">
            <AiFillStar />
            <h4>{byId.birth}</h4>
          </div>
          <div className="composer-date">
            <FaCross />
            <h4>{byId.death}</h4>
          </div>
        </div>
        <div>
          <a
            href={wikipediaLink(byId.complete_name)}
            target="_blank"
            rel="noreferrer"
          >
            <button>Wikipedia</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComposerHeaderInfo;
