var apiBenchmark = require("api-benchmark");
const fs = require("fs");

var services = {
    server1: "http://localhost:3000/",
};

var options = {
    minSamples: 100,
};


var routeWithoutCache = { route1: "user?email=Sincere@april.biz" };
var routeWithCache = { route1: "user/cached-user?email=Sincere@april.biz" };


apiBenchmark.measure(
    services,
    routeWithoutCache,
    options,
    function (err, results) {
        apiBenchmark.getHtml(results, function (error, html) {
            fs.writeFile("no-cache-results.html", html, function (err) {
                if (err) return console.log(err);
            });
        });
    }
);


apiBenchmark.measure(
    services,
    routeWithCache,
    options,
    function (err, results) {
        apiBenchmark.getHtml(results, function (error, html) {
            fs.writeFile("cache-results.html", html, function (err) {
                if (err) return console.log(err);
            });
        });
    }
);