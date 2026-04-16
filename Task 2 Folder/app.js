const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

let blogs = [];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index", { blogs });
});

app.get("/create", (req, res) => {
    res.render("create", { error: null });
});

app.post("/add", (req, res) => {
    const { title, content } = req.body;

    // Server-side validation
    if (!title || !content || title.trim() === "" || content.trim() === "") {
        return res.render("create", { error: "Title and Content are required!" });
    }

    blogs.push({ title, content });

    res.redirect("/");
});
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});