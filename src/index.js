const express = require("express");
const morgan = require('morgan');
const handlebars = require("express-handlebars");
const app = express();

const port = 3000

var hbs = handlebars.create();
app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');
app.use(morgan('combined'))
app.get("/", (req, res) => res.send(`<h1 style="color:red;" >Hello world</h1>`));

app.listen(port, () => console.log(`App dang chay o localhost:${port}`));