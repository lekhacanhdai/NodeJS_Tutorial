const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')
const app = express();

const route = require('./routes');

const db = require('./config/db');

db.connect()

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(methodOverride('_method'))

const port = 3000;

var hbs = handlebars.create({
  extname: '.html',
  helpers: {
    sum: (a, b) => a + b,
}
});
app.engine('html', hbs.engine);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'resources', "views"));

// app.use(morgan('combined'))

// route init
route(app);

app.listen(port, () => console.log(`App dang chay o localhost:${port}`));
