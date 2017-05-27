import React from "react";
import XLSX from "xlsx";
import FileUpload from "./FileUpload";
import GraphHolder from "./GraphHolder";

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
        this.resizeGraphs = this.resizeGraphs.bind(this);
    }

    // given the screen width, determine the number of columns there should be
    getNumColumns(width) {
        if (width < 768) {
            return 1;
        } else if (width < 1024) {
            return 2;
        } else if (width < 1440) {
            return 3;
        } else {
            return 4;
        }
    }

    // when the window resizes, we need to resize all of the graphs, so we
    // update state
    resizeGraphs() {
        this.setState({
            width: this.refs.section.parentNode.clientWidth,
            height: this.refs.section.parentNode.clientHeight,
        });
    }

    // set up resize listener
    componentDidMount() {
        window.addEventListener("resize", this.resizeGraphs);
    }

    // remove resize listener
    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeGraphs);
    }

    /**
     * Generates the HTML for the main section of the tracking page
     * @returns {JSX}
     */
    render() {
        var uploadID = "mainFileUpload";
        /**
         * This function is called once the user has selected a file. It reads
         * the file and sets its contents as state.sheets
         */
        var uploadOnChange = (e) => {
            // http://stackoverflow.com/questions/8560694/html-5-file-upload-event
            var files = e.target.files;
            if (files.length > 0) {
                var file = files[0];
                var reader = new FileReader();
                reader.onload = (e) => {
                    var data = e.target.result;
                    var workbook = XLSX.read(data, {type: "binary"});
                    this.setState({
                        sheets: workbook.Sheets,
                        width: this.refs.section.parentNode.clientWidth,
                        height: this.refs.section.parentNode.clientHeight
                    });
                };
                reader.readAsBinaryString(file);
            }
        };
        return (<section id={this.props.id} ref="section">
            <FileUpload id={uploadID} onChange={uploadOnChange} />
            <GraphHolder sheets={this.state.sheets} width={this.state.width} height={this.state.height} columns={this.getNumColumns(this.state.width)} />
        </section>);
    }
}

export default GraphingSection;
