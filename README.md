# tracking-graphs
## By Deanna Heer

This is a small webapp that allows the user to input a spreadsheet file and then graphs that data. The user has many options for customizing the graphs.


### Description
The intent for this web app is to allow users to easily create graphs out of their spreadsheets. This will be a single page app that utilizes a responsive design. Some intended use cases include:
- The user uploads their spreadsheet, the app intelligently graphs everything, the user is satisfied.
- The user wants multiple sheets to be combined into one graph, or the user wants only certain sheets to be combined into the same graph.
- The user wants to graph a sheet that switches the x and y axes.
- Customize how individual things (I need a better word for the things being tracked) are displayed in the graph -> %, boolean, # but also color and maybe thickness?
- ideally the user should be able to download their graph(s)?


### Commands
#### After Making Changes
The command `npm run compile` will use webpack to create the `dist/bundle.js` file.

#### Actually Running
User `npm start` to start up the node server, and the site will be up at `localhost:3000/`.

#### Combo!
The command `npm run tracking` is the same as running the above two commands in order, to compile changes and then run the server. Useful while developing.


### Technologies and Libraries Utilized

The first decision was to use React. I have a lot of experience with AngularJS but I'd like to get more experience with React. Likely with Babel so I can use JSX and webpack for building. I'll use the CSS preprocessor SASS. And likely the postprocessor Autoprefixer. On the server side of things I'll be using Node.js, with Express.js. Obviously D3 will be utilized for the graphing itself.


### References
General Resources and Tutorials and Articles that Helped (Note that I've left out actual documentation.)
- http://andrewhfarmer.com/how-to-style-react/
- https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html
- http://eyalarubas.com/getting-started-with-d3js.html
- https://bl.ocks.org/mbostock/4060954
- http://www.websitedimensions.com/

StackOverflow:
- http://stackoverflow.com/questions/30773756/is-it-okay-to-use-babel-node-in-production?lq=1
- http://stackoverflow.com/questions/16827858/npm-warn-package-json-no-repository-field
- http://stackoverflow.com/questions/5813344/how-to-customize-input-type-file
- http://stackoverflow.com/questions/8560694/html-5-file-upload-event
- http://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
- http://stackoverflow.com/questions/39285694/react-redux-get-width-of-components-parent-div
