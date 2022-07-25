require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const session = require('express-session');
app.use(session({secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false}));

const encodeRoute = require("./routes/encodeRoute");
const decodeRoute = require("./routes/decodeRoute");

app.use("/api/encode",encodeRoute);
app.use("/api/decode",decodeRoute);

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});