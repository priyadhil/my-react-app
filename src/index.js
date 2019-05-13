import React from "react";
//import ReactDOM from "react-dom";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(
//   <App name="Awesome App" age="1" dat="13/05/19" />,
//   document.getElementById("root")
// );

render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
