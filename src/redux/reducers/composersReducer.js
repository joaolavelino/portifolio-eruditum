const initialState = {
  essential: [],
  byLetter: [],
  byPeriod: [],
  byId: [],
  isLoading: true,
  error: {
    state: false,
    error: "",
  },
};
export const composersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ESSENTIAL_COMPOSERS":
      return {
        ...state,
        essential: action.payload.essential,
        isLoading: false,
      };
    case "FETCH_COMPOSERS_LETTER":
      return { ...state, byLetter: action.payload.byLetter, isLoading: false };
    case "FETCH_COMPOSERS_PERIOD":
      return { ...state, byPeriod: action.payload.byPeriod, isLoading: false };
    case "FETCH_COMPOSER_ID":
      return { ...state, byId: action.payload.byId, isLoading: false };
    case "FETCH_ERROR":
      return {
        ...state,
        error: { state: true, error: action.payload.error },
        isLoading: false,
      };
    case "LOADING_COMPOSERS":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};
