const path = require("path")
const express = require("express");
const morgan = require('morgan');
const handlebars = require("express-handlebars");
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

const port = 3000

var hbs = handlebars.create({
    extname : ".html"
});
app.engine('html', hbs.engine);
app.set('view engine', 'html');
app.set('views', './src/resources/views')
app.use(morgan('combined'))
app.get("/", (req, res) => res.render("home"));
app.get("/news", (req, res) => res.render("news"));

app.listen(port, () => console.log(`App dang chay o localhost:${port}`));