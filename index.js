const express = require("express");
const connectdb = require("./config/db");
const dotenv = require("dotenv").config();

const port = 5000;

connectdb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/pokemons", require("./routes/pokemons.routes"));
app.use("/users", require("./routes/users.routes"));

app.listen(port, () => {
  console.log(`Le server est démarré sur le port: ${port}`);
});
