import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ComposerComplete from "../components/ComposerComplete";
import { composerById } from "../redux/actions/composersAction";
import { worksComposer } from "../redux/actions/worksActions";

const ComposerWorks = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(worksComposer(id));
    dispatch(composerById(id));
  });

  return <ComposerComplete />;
};

export default ComposerWorks;
