import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Sample from "./script";
//import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Sample />
  </BrowserRouter>,
  document.getElementById("app")
);

//reportWebVitals();
