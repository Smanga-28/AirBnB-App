import { OPEN_MODAL } from '../Types/modalTypes';

const initialState = { openClose: 'closed', content: '' };

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state, // Preserve any other state properties
        openClose: action.payload.openClose,
        content: action.payload.content,
      };
    default:
      return state;
  }
};
