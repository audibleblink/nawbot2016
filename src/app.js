import express from "express"
import * as bot from "./bot"
import * as bodyParser from "body-parser"
const app = express()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/:anything", (req, res) => {
  res.send("Hi! I'm Nawbot")
})

app.post("/:anything", bot.respond)

const server = app.listen(5000);
