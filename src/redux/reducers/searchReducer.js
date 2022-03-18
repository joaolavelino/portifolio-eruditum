const initialState = {
  searchResults: [],
  isLoading: true,
  error: {
    state: false,
    error: "",
  },
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_OMNISEARCH":
      return {
        ...state,
        searchResults: action.payload.searchResults,
        isLoading: false,
      };
    case "FETCH_OMNISEARCH_NO_RESULTS":
      return {
        ...state,
        searchResults: [],
        isLoading: false,
      };
    case "FETCH_OMNISEARCH_ERROR":
      return {
        ...state,
        isLoading: false,
        searchResults: [],
        error: {
          state: true,
          error: action.payload.error,
        },
      };
    case "LOADING_OMNISEARCH":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state, isLoading: false };
  }
};
