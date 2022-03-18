import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ExplorerItem from "./ExplorerItem";
import ComposerCard from "./ComposerCard";
import { LoadingPoints } from "./Loading";
// import { composerByPeriod } from "../redux/actions/composersAction";

const ExplorerList = ({ object }) => {
  const { byPeriod, byLetter, isLoading } = useSelector(
    (state) => state.composers
  );

  const loadComposers = () => {
    if (object.type === "periods") return byPeriod;
    else return byLetter;
  };

  return (
    <>
      <List>
        {object.list.map((e, index) => (
          <ExplorerItem title={e} type={object.type} key={`explorer${index}`}>
            <div className="composers">
              {isLoading ? (
                <LoadingPoints />
              ) : (
                loadComposers().map((composer) => (
                  <ComposerCard composer={composer} key={composer.id} />
                ))
              )}
            </div>
          </ExplorerItem>
        ))}
      </List>
    </>
  );
};

const List = styled(motion.section)`
  width: 100%;
`;

export default ExplorerList;
