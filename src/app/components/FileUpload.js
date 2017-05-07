import React from "react";

/**
 * @class FileUpload
 * @extends React.Component
 */
class FileUpload extends React.Component {
    /**
     * @constructor for a FileUpload component
     */
    constructor(props) {
        super(props);
    }

    /**
     * Generates the HTML for a single file upload button
     * @returns {JSX}
     */
    render() {
        var text = "U P L O A D";

        return (<div className="fileUploadHolder">
            <label htmlFor={this.props.id} className="fileUploadLabel">{text}</label>
            <input type="file" id={this.props.id} className="fileUploadInput" onChange={this.props.onChange}></input>
        </div>);
    }
}

export default FileUpload;
