const IncomingForm = require("formidable").IncomingForm;
const fs = require("fs");

module.exports = function upload(req, res) {
  var form = new IncomingForm();

  form.on("file", (field, file) => {
    // Do something with the file
    // e.g. save it to the database
    // you can access it using file.path
    // console.log("uploaded file: ", file.path);
    const dest = './public/' + file.name;
    // destination.txt will be created or overwritten by default.
    fs.createReadStream(file.path).pipe(fs.createWriteStream(dest));
    // fs.copyFile(file.path, dest, err => {
    //   if (err) throw err;
    //   console.log(file.path, " was loaded to ");
    // });
  });
  form.on("end", () => {
    res.json();
  });
  form.parse(req);
};
