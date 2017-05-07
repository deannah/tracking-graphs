import React from "react";

/**
 * @class Graph
 * @extends React.Component
 */
class Graph extends React.Component {
    /**
     * @constructor for a Graph component
     */
    constructor(props) {
        super(props);
    }

    /**
     * Generates a single graph
     * @returns {JSX}
     */
    render() {
        // http://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
        var sheets = this.props.sheets;
        return (<div className="workbook">
            {Object.keys(sheets).map(function(sheetName) {
                console.log(sheetName);
                var cells = sheets[sheetName];
                //var cellJSX = [];
                for (var cell in cells) {
                    var col = cell[0];
                    var row = Number(cell.slice(1));
                    var value = cells[cell];
                    console.log(value);
                    //var cellSpan = <span key={cell}>{value}</span>
                    //cellJSX.push(cellSpan);
                }
                return (<div key={sheetName} className="sheet">
                    <h3>{sheetName}</h3>
                </div>);
            })}
        </div>);
    }
}

export default Graph;
