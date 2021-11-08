import {
  RECEIVE_BOARDS,
  RECEIVE_BOARD,
  DISPLAY_BOARD,
  REMOVE_BOARD,
} from "../actions/board_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_BOARDS:
      return action.boards;
    case RECEIVE_BOARD:
      newState[action.board.id] = action.board;
      return newState;
    case REMOVE_BOARD:
      delete newState[action.boardId];
      return newState;
    default:
      return state;
  }
};
