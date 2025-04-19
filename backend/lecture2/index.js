import express from "express"

const app =express();
const port=3000;


app.get('/',(req,res)=>{
    res.send("<h1>Hello</h1>")
});
app.get('/about',(req,res)=>{
    res.send("<h1>Hello, from the about page</h1>")
});
app.get('/contact',(req,res)=>{
    res.send("<h1>Hello, from the contact page</h1>")
});
app.get('/login',(req,res)=>{
    res.send(`
    <label>Email address</label>
    <input type="email" id="email"
    placeholder="name@example.com"/>

    <label>Password</label>
    <input type="password" id="pass"
      placeholder="******"/>
  `)
});


app.listen(port ,()=>{

    console.log("Server is running")
})