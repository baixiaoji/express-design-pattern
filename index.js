// const http = require("http");
const express = require('express')

const users = require("./fixtures/users.json");
const emails = require("./fixtures/emails.json");

const app = express()

let getUsersRoute = (req, res) => {
    res.send(users)
}
let getEmailsRoute = (req, res) => {
    res.send(emails)
}

let noRouteHandler = (req, res) => {
    let route = req.method + " " + req.url;
    res.end(`you asked for ${route}\n`);
}

let routes = {
    'GET /users': getUsersRoute,
    'GET /emails': getEmailsRoute,
}

app.use((req, res) => {
    let route = req.method + " " + req.url;

    const handler = routes[route] || noRouteHandler

    console.log(req.accepts())
    res.type(req.accepts()[0])
    handler(req, res)
})

// let server = http.createServer(app);

app.listen(3000, () => {
    console.log("listen 3000");
});
