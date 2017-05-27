import React from "react";
import Title from "./Title";
import GraphingSection from "./GraphingSection";

/**
 * @class TrackingRoot
 * @extends React.Component
 */
class TrackingRoot extends React.Component {
    /**
     * Generates the HTML for entire Tracking page
     * @returns {JSX}
     */
    render() {
        var name = "tracking";
        var graphingID = "graphingSection";
        return (
            <div>
                <Title name={name}></Title>
                <GraphingSection id={graphingID}></GraphingSection>
            </div>
        );
    }
}

export default TrackingRoot;
