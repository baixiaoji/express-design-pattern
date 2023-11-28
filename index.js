// const http = require("http");
const express = require('express')

const users = require("./fixtures/users.json");
const emails = require("./fixtures/emails.json");

const app = express()

let getUsersRoute = (req, res) => {
    console.log(req.params)
    res.send(users)
}
let getUserRoute = (req, res) => {
    const user = users.find(user => user.id === req.params.id)
    res.send(user)
}
let getEmailsRoute = (req, res) => {
    res.send(emails)
}
let getEmailRoute = (req, res) => {
    const email = emails.find(email => email.id === req.params.id)
    res.send(email)
}

let noRouteHandler = (req, res) => {
    let route = req.method + " " + req.url;
    res.end(`you asked for ${route}\n`);
}

let usersRouter = express.Router();
let emailsRouter = express.Router();

usersRouter.get('/users', getUsersRoute)
usersRouter.get('/users/:id', getUserRoute)
emailsRouter.get('/emails', getEmailsRoute)
emailsRouter.get('/emails/:id', getEmailRoute)

app.use(usersRouter)
app.use(emailsRouter)

// let server = http.createServer(app);

app.listen(3000, () => {
    console.log("listen 3000");
});
