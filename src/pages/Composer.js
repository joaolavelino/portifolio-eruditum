import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ComposerEssential from "../components/ComposerEssential";
import ComposerHeader from "../components/ComposerHeader";
import { composerById } from "../redux/actions/composersAction";
import { worksComposerEssential } from "../redux/actions/worksActions";
import { pageAnimation } from "../util/animations";

const Composer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("composer-page");
    dispatch(composerById(id));
    dispatch(worksComposerEssential(id));
    setLoading(false);
  }, [id, dispatch]);

  return (
    <>
      {!loading && (
        <ComposerStyled
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <ComposerHeader />
          <ComposerEssential />
        </ComposerStyled>
      )}
    </>
  );
};

const ComposerStyled = styled(motion.main)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default Composer;
