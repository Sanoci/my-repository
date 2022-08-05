const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

//API EXWjXefvZTEEBIar
const app = express();
app.use(cors());
app.use(express.json());

app.get("/comics", async (req, res) => {
  try {
    let title = "";
    if (req.query.title) {
      title = req.query.title;
    }
    let skip = 0;
    if (req.query.skip) {
      title = req.query.skip;
    }

    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&limit=100&title=${title}&skip=${skip}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/comics/:characterld", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/?apiKey=${process.env.MARVEL_API_KEY}${characterld}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.MARVEL_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/character/:characterld", async (req, res) => {
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/?apiKey=${process.env.MARVEL_API_KEY}${characterld}`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(4000, () => {
  console.log("Serveur OK !");
});
