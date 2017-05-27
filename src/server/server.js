// Set up server
import path from "path";
import Express from "express";

var app = Express();
var server;

const PATH_DIST = path.resolve(__dirname, "../../dist");

app.use(Express.static(PATH_DIST));

// Main page
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/index.html"));
});

server = app.listen(process.env.PORT || 3000, () => {
    var port = server.address().port;

    console.log("Server is listening at %s", port);
});
