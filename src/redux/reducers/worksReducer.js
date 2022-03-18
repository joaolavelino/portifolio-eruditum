const initialState = {
  byComposer: [],
  essentialByComposer: [],
  random: {},
  isLoading: true,
  error: {
    state: false,
    error: "",
  },
};

export const worksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WORKS_COMPOSER_ALL":
      return {
        ...state,
        byComposer: action.payload.byComposer,
        isLoading: false,
      };
    case "FETCH_WORKS_COMPOSER_ALL_INEXISTENT":
      return {
        ...state,
        byComposer: action.payload.byComposer,
        isLoading: false,
      };
    case "FETCH_WORKS_COMPOSER_ESSENTIAL":
      return {
        ...state,
        essentialByComposer: action.payload.essentialByComposer,
        isLoading: false,
      };
    case "FETCH_WORKS_RANDOM":
      return { ...state, random: action.payload.random, isLoading: false };
    case "FETCH_ERROR_WORKS":
      return {
        ...state,
        error: { state: true, error: action.payload.error },
        isLoading: false,
      };
    case "LOADING_WORKS":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};
