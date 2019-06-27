const IncomingForm = require("formidable").IncomingForm;
const fs = require("fs");

module.exports = function upload(req, res) {
  var form = new IncomingForm();
  let fileName = '';
  form.on("file", (field, file) => {
    fileName = file.name;
    const dest = './public/' + file.name;
    fs.createReadStream(file.path).pipe(fs.createWriteStream(dest));
  });
  form.on("end", () => {
    res.send({"fileName": fileName});
  });
  form.parse(req);
};
