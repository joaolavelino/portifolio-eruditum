const intitalState = {
  selected: "",
};

export const explorerReducer = (state = intitalState, action) => {
  switch (action.type) {
    case "EXPLORER_SELECTED":
      return { ...state, selected: action.payload.selected };
    default:
      return { ...state };
  }
};
