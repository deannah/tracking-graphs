import React from "react";
import XLSX from "xlsx";
import FileUpload from "./FileUpload";
import Graph from "./Graph";

/**
 * @class GraphingSection
 * @extends React.Component
 */
class GraphingSection extends React.Component {
    /**
     * @constructor for a GraphingSection component
     */
    constructor(props) {
        super(props);
        this.state = {sheets: {}};
    }

    /**
     * Generates the HTML for the main section of the tracking page
     * @returns {JSX}
     */
    render() {
        var ID = this.props.id;
        var uploadID = "mainFileUpload";
        /**
         * This function is called once the user has selected a file.
         */
        var uploadOnChange = (e) => {
            // http://stackoverflow.com/questions/8560694/html-5-file-upload-event
            var files = e.target.files;
            if (files.length > 0) {
                var file = files[0];
                console.log(file.name);
                var reader = new FileReader();
                reader.onload = (e) => {
                    var data = e.target.result;
                    var workbook = XLSX.read(data, {type: "binary"});
                    this.setState({sheets: workbook.Sheets});
                };
                reader.readAsBinaryString(file);
            }
        };
        return (<section id={ID}>
            <FileUpload id={uploadID} onChange={uploadOnChange}></FileUpload>
            <Graph sheets={this.state.sheets} width={200} height={200}></Graph>
        </section>);
    }
}

export default GraphingSection;
