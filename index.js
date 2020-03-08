import http from 'http';
import express from "express";
let app = express();

app.use(express.static(__dirname + "/wwww"));

let aUrls = [
    "/www/",
];

// Create http server that leverages reverse proxy instance
// and proxy rules to proxy requests to different targets
http.createServer(app)
.listen(app.get('port'), function () {
  console.log('app listening on port ' + app.get('port') + "! Go to https://localhost:" + app.get('port') + "/")
});