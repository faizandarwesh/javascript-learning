require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from chai aur code");
});

app.get("/home", (req, res) => {
  res.send("Hello from home page");
});

app.get("/jokes", (req, res) => {
  jokes = [
    { id: 1, title: "Joke 1", content: "This is joke 1" },
    { id: 2, title: "Joke 2", content: "This is joke 2" },
    { id: 3, title: "Joke 3", content: "This is joke 3" },
    { id: 4, title: "Joke 4", content: "This is joke 4" },
    { id: 5, title: "Joke 5", content: "This is joke 5" }];

    res.send(jokes);
});

app.listen(port, () => {
  console.log(`app is listening to port : ${port}`);
});
