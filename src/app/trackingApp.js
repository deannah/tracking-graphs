import React from "react";
import ReactDOM from "react-dom";

import TrackingRoot from "./components/TrackingRoot";

class TrackingApp {
    /**
     * @constructor for the entire tracking display
     * @param {Object} options
     */
     constructor(options) {
         this.state = options.state;
     }

     /**
      * @param {DOM} element - the element that will contain the tracking display
      * @returns if element is present, returns undefined. Otherwise returns the
      * calendar rendered to string
      */
      render(element) {
          var root = <TrackingRoot />;

          // render to DOM
          if(element) {
              ReactDOM.render(root, element);
              return;
          } else {
              // render to string
              return React.renderToString(root);
          }
      }

      /**
       * @param {DOM} element - the element that will contain the tracking display
       * @returns if element is present, returns undefined. Otherwise throws
       * error
       */
      renderToDOM(element) {
          if (!element) {
              throw new Error("renderToDOM requires an element");
          } else {
              this.render(element);
          }
      }

      /**
       * @returns the trackig display rendered to string
       */
      renderToString() {
          return this.render();
      }
}

export default TrackingApp;
