import {
  CLEAR_RESET_VALUE,
  SET_GRID_ARRAY
} from "redux/constants/ActionTypes.js";

const INIT_STATE = {
  gridArray: new Array(50).fill(
    new Array(50).fill({value: null, isReset: false})
  )
};

// eslint-disable-next-line
export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_GRID_ARRAY:
      return {
        ...state,
        gridArray: action.payload
      };
    case CLEAR_RESET_VALUE: {
      let array = state.gridArray.map(row => {
        return row.map(col => {
          return {
            ...col,
            isReset: false
          };
        });
      });
      return {
        ...state,
        gridArray: array
      };
    }
    default:
      return state;
  }
};
