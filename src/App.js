import React from "react";
import {Provider} from "react-redux";
import configureStore from "./redux/store";
import Grids from "apps/Grids/index.js";

export const store = configureStore();
/**
 * Renders the main infrastructure.
 * Redux store connected.
 * @returns {JSX.Element}
 */
const App = () => (
  <Provider store={store}>
    <Grids />
  </Provider>
);

export default App;
