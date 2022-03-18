import axios from "axios";
import { omnisearch_url } from "../../api";

export const omnisearch = (term) => async (dispatch) => {
  dispatch({ type: "LOADING_OMNISEARCH" });

  try {
    const result = await axios.get(omnisearch_url(term));
    console.log(result);

    if (result.data.status.success === "true") {
      dispatch({
        type: "FETCH_OMNISEARCH",
        payload: {
          searchResults: result.data.results,
        },
      });
    } else {
      dispatch({
        type: "FETCH_OMNISEARCH_NO_RESULTS",
      });
    }
  } catch (e) {
    console.log(e);
    dispatch({
      type: "FETCH_OMNISEARCH_ERROR",
      payload: { error: e, searchResults: [] },
    });
  }
};
