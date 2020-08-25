import React, { Fragment } from "react";
import store from "../redux/store";
import { Provider } from "react-redux";
import Navbar from "../components/navbar";
import "../styles/standingstable.scss";
function App() {
  return (
    <Provider store={store}>
      <Fragment >
        <Navbar />
      </Fragment>
    </Provider>
  );
}

export default App;
