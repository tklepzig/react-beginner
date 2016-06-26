import * as React from "react";
import * as ReactDOM from "react-dom";

import { Panel } from "./components/Panel";
import "./styles/main.scss";

ReactDOM.render(
    <Panel color="red" orientation="top right" />,
    document.getElementById("root")
);
