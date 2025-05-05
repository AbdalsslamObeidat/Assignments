import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
let posts = [
  { title: "First Post", content: "This is the first blog post",auther:"ahmad", date: new Date() },
  { title: "Second Post", content: "Another great blog post!",auther:"khaled",date: new Date() },
,
];

app.listen(port, () => {
  console.log("Server Runing");
});

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});
//new post route
app.get("/new", (req, res) => {
  res.render("new_post.ejs");
});

app.post("/new", (req, res) => {
  const { title, content,auther } = req.body;
  posts.push({ title, content,auther, date: new Date() }); 
  res.redirect("/");
});

//edit post route
app.get("/edit/:index", (req, res) => {
  const index = req.params.index;
  res.render("edit_post.ejs", { index, post: posts[index] });
});

app.post("/edit/:index", (req, res) => {
  const index = req.params.index;
  posts[index] = {
    title: req.body.title,
    content: req.body.content,
    auther:req.body.auther,
    date: new Date(), 
  };
  res.redirect("/");
});

//delete post
app.get("/delete/:index", (req, res) => {
  const index = req.params.index;
  posts.splice(index, 1);
  res.redirect("/");
});
