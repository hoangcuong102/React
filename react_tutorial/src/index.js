import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Game from "./components/Game";

ReactDOM.render(<Game />, document.getElementById("root"));
registerServiceWorker();
