import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const app = express();
//morgan('tiny');
const port = 3000;

let userInfo = {
  email: null,
  password: null
};

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));

function saveToDb(req, res, next) {
  userInfo.email = req.body.email;
  userInfo.password = req.body.password;
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.use(saveToDb);
app.post("/submit", (req ,res) => {
  res.send(`<h1>Your Email ${userInfo.email} and password ${userInfo.password}</h1>`);
  console.log(req.body);
});

app.listen(port, () => {
  console.log("Server is running");
});
