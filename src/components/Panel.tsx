import * as React from "react";

export interface PanelProps {
    orientation: string;
    color?: string;
}

export class Panel extends React.Component<PanelProps, {}> {
    render() {
        return <div className={"flex panel row-sm col-xl " + this.props.color + " " + this.props.orientation}>
            <div className="content">
            </div>
        </div>;
    }
}
