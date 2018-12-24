import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Arrows from "./components/arrows";
import Toggle from "./components/login";

ReactDOM.render(<Arrows />, document.getElementById("root"));
registerServiceWorker();
