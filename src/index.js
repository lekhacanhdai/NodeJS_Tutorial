const path = require("path")
const express = require("express");
const morgan = require('morgan');
const handlebars = require("express-handlebars");
const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

const port = 3000

var hbs = handlebars.create({
    extname : ".html"
});
app.engine('html', hbs.engine);
app.set('view engine', 'html');
app.set('views', './src/resources/views')

// app.use(morgan('combined'))

app.get("/", (req, res) => res.render("home"));
app.get("/news", (req, res) => res.render("news"));

app.get("/search", (req, res) => {
    console.log(req.query.q === "");
    res.render("search");
});

app.post("/search", (req, res) => {
    // console.log(req.query.q);
    console.log(req.body);
    res.send("");
});


app.listen(port, () => console.log(`App dang chay o localhost:${port}`));