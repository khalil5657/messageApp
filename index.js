const express = require("express")
const app = express()
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs")

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

app.get("/", (req, res)=>{
    res.render("home", {messages:messages})
})
app.get("/new", (req, res)=>{
    res.render("form")
})
app.post("/new", (req, res)=>{
    messages.push({text:req.body.message, user:req.body.author, added: new Date()})
    res.redirect("/")
})
app.get("/post/:id", (req, res)=>{
    let message = messages[req.params.id]
    res.render("showpost", {message:message})
})
app.listen(3000)