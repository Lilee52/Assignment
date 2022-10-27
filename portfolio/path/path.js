const path = require("path");
let filePath = path.join(__dirname, "path.js");


let fileExtension = path.extname(filePath);

let baseName = path.basename(filePath);
console.log(fileExtension);