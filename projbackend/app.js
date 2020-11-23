require('dotenv').config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");


// DB connection
mongoose.connect("mongodb://localhost:27017/tshirt", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED...")
});

// Inbuilt middleware 
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use("/api", authRoutes);


// Ports
const port = process.env.PORT || 8000;

// Starting a server
app.listen(port, () => {
    console.log(`app is running at: ${port}`)
});
