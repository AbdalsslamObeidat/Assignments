import express from "express";

const app = express();

app.use(express.static("public"));
const port = 3000;


let arr1 = ["John", "Jane", "Mike", "Sara", "Tom", "Emily", "Alex", "Linda", "Chris", "Nina"];
let arr2 = ["Doe", "Smith", "Brown", "Johnson", "Davis", "Miller", "Wilson", "Taylor", "Anderson", "Thomas"];


app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.post("/submit", (req, res) => {
  
  
   
      const randName = arr1[Math.floor(Math.random() * arr1.length)];
      const randName2 = arr2[Math.floor(Math.random() * arr2.length)];
   
     res.render('index.ejs',{
        randName:randName,
        randName2:randName2,
     })
    
  });


app.listen(port, () => {});


 