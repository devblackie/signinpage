import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider } from "./components/UserContext";

ReactDOM.render(
<UserProvider></UserProvider>
, document.getElementById("root"));
