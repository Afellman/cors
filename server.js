const express = require('express');
const app = express();
const PORT = 8081;
const request = require('request');
const cors = require('cors');

app.use(cors());

app.post('/cors/', (req, res) => {
  var urlToGet = req.body.url;
  makeRequest("http://", urlToGet, function (error, response) {
    if (!error) {
      console.log(response)
      res.send(response);
    } else {
      res.send(error);
      throw new Error(error);
    }
  });
});


function makeRequest(protocol, url, cb) {
  request(protocol + url, function (error, response, body) {
    if (!error) {
      if (cb) cb(false, body);
    } else if (prop == "http://") {
      makeRequest("https://", url, cb)
    } else {
      cb(error, body);
    }
  });

}


app.listen(PORT, () => console.log(`Gator app listening on port${PORT}`));
