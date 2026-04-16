const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let blogs = [];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { blogs });
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/add", (req, res) => {
    const { title, content } = req.body;

    blogs.push({ title, content });

    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});