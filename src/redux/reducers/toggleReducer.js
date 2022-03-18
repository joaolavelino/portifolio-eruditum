const initialState = {
  mobileNav: false,
  exploreNav: false,
};

export const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MOBILE_NAV":
      return { ...state, mobileNav: !state.mobileNav };
    case "CLOSE_MOBILE_NAV":
      return { ...state, mobileNav: false };
    case "TOGGLE_EXPLORE_NAV":
      return { ...state, exploreNav: !state.exploreNav };
    case "CLOSE_EXPLORE_NAV":
      return { ...state, exploreNav: false };
    default:
      return { ...state };
  }
};
