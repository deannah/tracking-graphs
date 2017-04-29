import React from "react";
import Title from "./Title";
import FileUpload from "./FileUpload";

/**
 * @class TrackingRoot
 * @extends React.Component
 */
class TrackingRoot extends React.Component {
    /**
     * Generates the HTML for Tracking
     * @returns {JSX}
     */
    render() {
        var id = "mainFileUpload";
        var name = "tracking";
        return (
            <div>
                <Title name={name}></Title>
                <FileUpload id={id}></FileUpload>
            </div>
        );
    }
}

export default TrackingRoot;
