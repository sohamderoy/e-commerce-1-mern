const express = require("express");
const app = express();
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

const port = 8000;

const admin = (req, res) => (res.send("This is admin page"));
const isAdmin = (req, res, next) => {  // what dose the middleware isAdmin do???
    console.log("isAdmin is running");
    next();                             // mention the next in the arguments above to use next()
}
//the isAdmin middleware function can be crafted in a way so that only if its true then the next() should execute o else we stop the request and do not sent any response
// we can add multiple middleware if we want in same way
app.get("/admin", isAdmin, admin); // Here isAdmin is running as a middleware whose process has been defined above
app.get("/login", (req, res) => (res.send("You are visiting login route!")));
app.get("/", (req, res) => (res.send("Its the home page")));
app.get("/signup", (req, res) => (res.send("Its the signup page")));
app.listen(port, () => (console.log("Server is up and running...")));
