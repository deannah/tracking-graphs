// Responsible for actually rendering the React app
import TrackingApp from "../../app";

var trackingElement = document.getElementById("tracking-app");

var options = {state: {}};

var app = new TrackingApp(options);
app.renderToDOM(trackingElement);
