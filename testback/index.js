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
app.get("/login", (req, res) => (res.send("You are visiting login route!")));
app.get("/", (req, res) => (res.send("Its the home page")));
app.get("/signup", (req, res) => (res.send("Its the signup page")));
app.listen(port, () => (console.log("Server is up and running...")));
