const path = require("path")
const express = require("express");
const morgan = require('morgan');
const handlebars = require("express-handlebars");
const app = express();

const route = require("./routes")

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


// route init
route(app);


app.listen(port, () => console.log(`App dang chay o localhost:${port}`));