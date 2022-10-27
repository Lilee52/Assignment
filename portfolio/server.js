const http = require("http");
const fs = require("fs");
const path = require("path");

//create a server with http variable
const server = http.createServer((req, res) => {
    //headers
   
    if (req.url === "/index.html") {
        let filePath = path.join(__dirname, "public", "index.html");
        fs.readFile(filePath, "utf-8", (err, data) => {
            res.writeHead(200, { "Content-Type": "text.html" });
            res.end(data);
    
        });

    // 
    }
    if (req.url === "/contact.html") {
        let filePath = path.join(__dirname, "public", "contact.html");
        fs.readFile(filePath, "utf-8", (err, data) => {
            res.writeHead(200, { "Content-Type": "text.html" });
            res.end(data);
        
        });
    }

    if (req.url === "/about.html") {
        let filePath = path.join(__dirname, "public", "about.html");
        fs.readFile(filePath, "utf-8", (err, data) => {
            res.writeHead(200, { "Content-Type": "text.html" });
            res.end(data);
        
        });
    }
    });


const port = 5000

//create a port
server.listen(port, () => {
    console.log(`Server is running ${port}`);
});

