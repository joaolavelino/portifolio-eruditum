import axios from "axios";
import {
  works_composer_url,
  works_composer_essential_url,
  works_random_url,
} from "../../api";
import { composers_id_url } from "../../api.js";

export const randomWork = () => async (dispatch) => {
  dispatch({ type: "LOADING_WORKS" });
  //FETCH AXIOS
  try {
    const result = await axios.get(works_random_url);
    const id = result.data.works[0].composer.id;
    const composer = await axios.get(composers_id_url(id));

    dispatch({
      type: "FETCH_WORKS_RANDOM",
      payload: {
        random: {
          piece: result.data.works[0],
          composer: composer.data.composers[0],
        },
      },
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: "FETCH_ERROR_WORKS", payload: { error: e } });
  }
};

export const worksComposer = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_WORKS" });
  //FETCH AXIOS
  try {
    const result = await axios.get(works_composer_url(id));
    console.log(result);

    if (result.data.status.success === "true") {
      dispatch({
        type: "FETCH_WORKS_COMPOSER_ALL",
        payload: {
          byComposer: result.data.works,
        },
      });
    } else {
      dispatch({
        type: "FETCH_WORKS_COMPOSER_ALL_INEXISTENT",
        payload: {
          byComposer: [],
        },
      });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: "FETCH_ERROR_WORKS", payload: { error: e } });
  }
};

export const worksComposerEssential = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_WORKS" });
  //FETCH AXIOS
  try {
    const result = await axios.get(works_composer_essential_url(id));
    console.log(result);

    if (result.data.status.success === "true") {
      dispatch({
        type: "FETCH_WORKS_COMPOSER_ESSENTIAL",
        payload: {
          essentialByComposer: result.data.works,
        },
      });
    } else {
      dispatch({
        type: "FETCH_WORKS_COMPOSER_ESSENTIAL",
        payload: {
          essentialByComposer: [],
        },
      });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: "FETCH_ERROR_WORKS", payload: { error: e } });
  }
};
