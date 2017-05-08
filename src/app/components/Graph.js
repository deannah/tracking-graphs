import React from "react";
import * as d3 from "d3";
import rainbow from "../../utils/rainbow";

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
     * Given sheet from a spreadsheet, create an array of path data strings
     * Heavily influenced by: https://bl.ocks.org/mbostock/4060954
     */
    pathDataFromSheet(sheet) {
        var colHeaders = {};
        var rows = {};
        var xMax = 0;
        var yMax = 0;
        for (var cell in sheet) {
            var col = cell[0];
            var row = Number(cell.slice(1));
            var value = sheet[cell];
            var contents = value.v;
            if (row == 1 && col != "A") {
                // The first row contains column headers
                colHeaders[col] = contents;
            } else if (!isNaN(row) && col != "A") {
                // every remaining row corresponds to a datum. build
                // that datum from its cells
                if (!rows[row]) {
                    // if we haven't been to this row yet add it to rows
                    rows[row] = {};
                    var asDate = new Date(contents);
                    if (asDate) {
                        // check if above xMax
                        var ms = asDate.getTime();
                        if (ms > xMax) {
                            xMax = ms;
                        }
                    }
                }
                // now add the contents of this cell
                rows[row][colHeaders[col]] = contents;
                // check if greater than xMax
                if (contents > yMax) {
                    yMax = contents;
                }
            }
        }
        var rowArray = [];
        for (var row in rows) {
            rowArray.push(rows[row]);
        }
        var headers = [];
        for (var header in colHeaders) {
            headers.push(colHeaders[header]);
        }
        var stack = d3.stack()
            .keys(headers);
        var data = stack(rowArray);
        console.log(data);

        var x = d3.scaleTime()
            .domain([0, new Date(xMax)])
            .range([0, this.props.width]);

        var y = d3.scaleLinear()
            .domain([0, yMax])
            .range([this.props.height, 0]);

        var area = d3.area()
            .x((d, i) => x(i))
            .y0((d) => y(d[0]))
            .y1((d) => y(d[1]));

        var areas = [];
        for (var index in data) {
            var series = data[index];
            areas.push(area(series));
        }

        return areas;
    }

    /**
     * Generates a single graph
     * @returns {JSX}
     */
    render() {
        var sheets = this.props.sheets;
        var idPrefix = "canvas-";
        // http://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
        return (<div className="workbook">
            {Object.keys(sheets).map((sheetName, i) => {
                var pathDataStrings = this.pathDataFromSheet(sheets[sheetName]);
                return (<div key={sheetName} className="sheet">
                    <h3>{sheetName}</h3>
                    <svg id={idPrefix + i} width={this.props.width + "px"} height={this.props.height + "px"}>
                        <g>
                            {pathDataStrings.map((pds, idx) => {
                                return <path key={idx} className="sheet-path" d={pds} fill={rainbow(3, idx)}></path>
                            })}
                        </g>
                    </svg>
                </div>);
            })}
        </div>);
    }
}

export default Graph;
