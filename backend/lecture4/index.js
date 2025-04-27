import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  const name = req.body.name;
  res.render("index.ejs", {
    name: name,
    cart:["item1","item2"],
    content:"fgdfgsdgfdgdfgdfgfdgfdgfdgfdgfdgdfg",
  });
});

app.listen(port, () => {
  console.log("Server is running");
});
