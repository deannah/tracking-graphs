import React from "react";
import Graph from "./Graph";

/**
 * @class GraphHolder
 * @extends React.Component
 */
 class GraphHolder extends React.Component {
     /**
      * @constructor for a GraphHolder component
      */
     constructor(props) {
         super(props);
     }

     /**
      * Generates a Graph (with details) per sheet in this.props.sheets
      * @returns {JSX}
      */
     render() {
         var sheets = this.props.sheets;
         // can css and js get a length from same place? TODO
         var borderWidth = 1;
         // http://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
         return (<div className="workbook">
             {Object.keys(sheets).map((sheetName) => {
                 return (<div key={sheetName} className="sheet">
                     <h3>{sheetName}</h3>
                     <Graph width={this.props.width / this.props.columns - borderWidth * 2} height={this.props.height} sheet={sheets[sheetName]}/>
                 </div>);
             })}
         </div>);
     }
 }

export default GraphHolder;
