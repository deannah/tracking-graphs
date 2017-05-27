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
        var rowHeaders = {};
        var things = {};
        var xMax = 0;
        var yMax = 0;
        for (var cell in sheet) {
            var col = cell[0];
            var row = Number(cell.slice(1));
            var value = sheet[cell];
            var contents = value.v;
            //console.log(`${row}, ${col}: ${contents}`);
            if (row == 1 && col != "A") {
                // The first row contains column headers
                colHeaders[col] = contents;
            } else if (row != 1 && col == "A") {
                // first column contains row headers
                rowHeaders[row] = contents;
            } else if (!isNaN(row) && col != "A") {
                // every remaining columnn corresponds to a data object.
                // build that object from its cells
                if (!things[col]) {
                    // if we haven't been to this col yet add it to things
                    things[col] = {};
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
                things[col][rowHeaders[row]] = contents;
                // check if greater than xMax
                if (contents > yMax) {
                    yMax = contents;
                }
            }
        }

        // things holds the contents. Each element in thingArray represents a
        // column of data
        var thingArray = [];
        for (var thing in things) {
            thingArray.push(things[thing]);
        }
        // headers are the contents of the first column
        var headers = [];
        for (var header in rowHeaders) {
            headers.push(rowHeaders[header]);
        }
        var stack = d3.stack()
            .keys(headers);
        var data = stack(thingArray);

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
        var pathDataStrings = this.pathDataFromSheet(this.props.sheet);
        return (
                <svg width={this.props.width + "px"} height={this.props.height + "px"}>
                    <g>
                        {pathDataStrings.map((pds, idx) => {
                            return <path key={idx} className="sheet-path" d={pds} fill={rainbow(pathDataStrings.length, idx)}></path>
                        })}
                    </g>
                </svg>
        );
    }
}

export default Graph;
