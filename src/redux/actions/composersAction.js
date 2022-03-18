import axios from "axios";
import {
  composers_essential_url,
  composers_firstLetter_url,
  composers_id_url,
  composers_period_url,
} from "../../api.js";

//ACTION CREATOR

export const essentialComposers = () => async (dispatch) => {
  dispatch({ type: "LOADING_COMPOSERS" });
  //FETCH AXIOS
  try {
    const result = await axios.get(composers_essential_url);

    dispatch({
      type: "FETCH_ESSENTIAL_COMPOSERS",
      payload: {
        essential: result.data.composers,
      },
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: "FETCH_ERROR", payload: { error: e } });
  }
};

export const composerByLetter = (letter) => async (dispatch) => {
  dispatch({ type: "LOADING_COMPOSERS" });
  //FETCH AXIOS
  try {
    const result = await axios.get(composers_firstLetter_url(letter));
    console.log(result.data.composers);

    dispatch({
      type: "FETCH_COMPOSERS_LETTER",
      payload: {
        byLetter: result.data.composers,
      },
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: "FETCH_ERROR", payload: { error: e } });
  }
};

export const composerByPeriod = (period) => async (dispatch) => {
  dispatch({ type: "LOADING_COMPOSERS" });
  //FETCH AXIOS
  try {
    const result = await axios.get(composers_period_url(period));
    console.log(result.data.composers);

    dispatch({
      type: "FETCH_COMPOSERS_PERIOD",
      payload: {
        byPeriod: result.data.composers,
      },
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: "FETCH_ERROR", payload: { error: e } });
  }
};

export const composerById = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_COMPOSERS" });
  //FETCH AXIOS
  try {
    const result = await axios.get(composers_id_url(id));
    console.log(result.data.composers[0]);

    dispatch({
      type: "FETCH_COMPOSER_ID",
      payload: {
        byId: result.data.composers[0],
      },
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: "FETCH_ERROR", payload: { error: e } });
  }
};
