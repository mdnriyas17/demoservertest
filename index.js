const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const db = require("./db/db");

app.use(cors());
app.use(express.json());


dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
    db();
    console.log(`Server is running on port ${port}`);
})