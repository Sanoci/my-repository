const express = require("express");
const axios = require("axios");
const cors = require("cors");
//API EXWjXefvZTEEBIar
const app = express();
app.use(cors());
app.use(express.json());
app.get("/comics", async (req, res) => {
  axios
    .get(
      "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=EXWjXefvZTEEBIar"
    )
    .then((response) => {
      res.json(response.data);
    });
});
app.get("/comics/:characterld", async (req, res) => {
  axios
    .get(
      "https://lereacteur-marvel-api.herokuapp.com/comics/5fc8ba1fdc33470f788f88b3?apiKey=EXWjXefvZTEEBIar"
    )
    .then((response) => {
      res.json(response.data);
    });
});
app.listen(4000, () => {
  console.log("");
});
