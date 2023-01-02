const express = require('express');
const app = express();
const PORT = 5500

require("./models/mongodbConfig");

const UsersRoutes = require("./routes/usersController");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors())


app.get("/", (req, res) => {
  res.status(200).send("App is ready")
});

app.use("/users", UsersRoutes);

app.listen(PORT, () => {
  console.log(">> App listening on port " + PORT)
});