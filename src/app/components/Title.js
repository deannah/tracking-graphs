import React from "react";

/**
 * @class Title
 * @extends React.Component
 */
class Title extends React.Component {
    /**
     * @constructor for a Title component
     */
    constructor(props) {
        super(props);
    }

    /**
     * Generates the HTML for Title
     * @returns {JSX}
     */
    render() {
        return (
            <span className={`title ${this.props.name}-title`}>
                <h1>{this.props.name}</h1>
            </span>
        );
    }
}

export default Title;
