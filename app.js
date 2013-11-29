var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require,
    baseUrl: "../rexpress",
    paths: {
        backend  : "backend",
        shared   : "shared",
        frontend : "frontend"
    },
    deps : ["backend/server"]
});