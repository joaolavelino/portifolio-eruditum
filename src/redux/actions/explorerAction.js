export const explorerSelect = (item) => {
  return {
    type: "EXPLORER_SELECTED",
    payload: {
      selected: item,
    },
  };
};
