// const http = require("http");
const express = require('express')

const users = require("./fixtures/users.json");
const emails = require("./fixtures/emails.json");

const app = express()

app.use((req, res) => {
    let route = req.method + " " + req.url;
  
    if (route === "GET /users") {
      console.log(req.accepts())
      res.type(req.accepts()[0])
      res.send(users);
    } else if (route === "GET /emails") {
      res.send(emails);
    } else {
      res.end(`you asked for ${route}\n`);
    }
  })

// let server = http.createServer(app);

app.listen(3000, () => {
  console.log("listen 3000");
});
