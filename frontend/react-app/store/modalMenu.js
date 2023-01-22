const defaultState = {
  modalState: 0,
};
// eslint-disable-next-line import/prefer-default-export
export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MENU_MODAL_STATE":
      return { ...state, modalState: state.modalState + action.payload };
    default:
      return state;
  }
};

export const getNewModalState = (payload) => ({
  type: "MENU_MODAL_STATE",
  payload,
});
