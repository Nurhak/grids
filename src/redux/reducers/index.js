import {combineReducers} from "redux";

import Grids from "redux/reducers/Grids.js";

// eslint-disable-next-line
export default () =>
  combineReducers({
    grids: Grids
  });
