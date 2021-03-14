const http = require("http");
const fs = require("fs");
const _  = require('lodash')



const server = http.createServer((req, res) => {
    
    // lodash 
    const num = _.random(0,20);
    console.log(num) 



    res.setHeader("Content-Type", "text/html");
  fs.readFile("./views/index.html", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      //res.write(data)
      res.end(data);
    }
  });

});

server.listen(3000, () => {
  console.log("Hi connected");
});

