const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
var path = require('path');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/fileNames', (req, res) => {
  getFileNames('./client/src/PublicCode/', function (err, fileNames) {
    res.send({ express: fileNames });
  });
});


function getFileNames(path, callback) {
      fs.readdir(path, function (err, content) {
          if (err) return callback(err)
          callback(null, content);
      });
  }



  app.get('/api/files', (req, res) => {
    getFilesData(function (err, filesData) {
      res.send({ express: filesData });
    });
  });

function getFilesData(callback){
  var filesData = [];
  getFileNames('./client/src/PublicCode/', function (err, files) {
    files.forEach((fileName, i) => {
      readFileContents('./client/src/PublicCode/' + fileName, function (err, fileContent) {
        filesData.push({id: i, fileName: fileName, body: fileContent});

        files.length == filesData.length ? callback(null, filesData) : {}

      });
    });
  });
}


function readFileContents(filePath, callback){
  var file = path.normalize(filePath);
    fs.readFile(file, "utf8", function(err, content) {
        if (err) return callback(err)
        callback(null, content);
  });
}


app.listen(port, () => console.log(`Listening on port ${port}`));
