import * as React from "react";
import * as ReactDOM from "react-dom";

import { Panel } from "./components/Panel";
import "./styles/main.scss";

ReactDOM.render(
    <div className="flex layout-h">
    <Panel color="red" orientation="top right" rowHeight="xxs" colWidth="lg" flex="flex-30" />
    <Panel color="red" orientation="top left" rowHeight="xxs" colWidth="xl" flex="flex" />
    </div>,
    document.getElementById("root")
);
