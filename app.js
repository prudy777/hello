import express from "express";

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended : true}))

app.use(express.static("/public/styles.css"))

const blogPosts = [];
app.get('/', (req, res) => {
    res.render("index.ejs",{ blogPosts })
})

app.get("/create", (req, res) => {
    res.render("create.ejs")
})

app.post("/create", (req, res) => {
    const {title, content} = req.body;
    const newPosts = {title, content};
    blogPosts.push(newPosts);
    res.redirect("/")
})


app.listen(port, ()=> {
    console.log(`server running on port ${port}...`)
})