import * as React from "react";

export interface PanelProps {
    orientation: string;
    color?: string;
    rowHeight: string;
    colWidth: string;
    flex: string;
}

export class Panel extends React.Component<PanelProps, {}> {
    render() {
        return <div className={"panel row-" + this.props.rowHeight + " col-" + this.props.colWidth + " " + this.props.color + " " + this.props.orientation + " " + this.props.flex}>
            <div className="content">
            </div>
        </div>;
    }
}
