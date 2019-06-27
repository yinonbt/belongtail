var path = require('path');
var express = require('express');
var cors = require('cors')
var app = express();
app.use(cors());
var multer  = require('multer');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!!!');
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log('file path: ', req.file.path);
      console.log('file: ', JSON.stringify(file));
      console.log('Example app destination');
      cb(null, './public/images/');
    },
    filename: function (req, file, cb) {
      console.log('Example app filename');
      cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
  });
  
  var upload = multer({ storage: storage });
  
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.post('/upload', upload.single('wallpaper'), function (req, res) {
    console.log('dfsdf');
    var imagePath = req.file.path.replace(/^public\//, '');
    console.log('imagePath: ', imagePath);
    res.redirect(imagePath);
  });
  
  app.use(function (err, req, res, next) {
    if (err instanceof multer.MulterError) res.status(500).send(err.message);
    else next(err);
  });
  