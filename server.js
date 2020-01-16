const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect Database
connectDB();

app.get("/", (req, res) => res.send("API Running"));

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use("/api/investments", require("./routes/api/investments"))

//Set Port
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
