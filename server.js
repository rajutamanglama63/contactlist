const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const getContactRouter = require("./routes/contactRoutes");
const postContactRouter = require("./routes/contactRoutes");
const deleteContactRouter = require("./routes/contactRoutes");
const updateContactRouter = require("./routes/contactRoutes");

const app = express();

dotenv.config();

connectDB();

const Port = process.env.PORT || 4000;

app.use(express.json());

// app.use("/", (req, res) => {
//     res.send("Hello World");
// });

app.use("/contacts", getContactRouter);
app.use("/create", postContactRouter);
app.use("/:id/delete", postContactRouter);
app.use("/:id/update", postContactRouter);

app.listen(Port, () => {
    console.log(`Server running on Port http://localhost:${Port}`);
});