const express = require('express');
require('dotenv').config();
const hbs = require('hbs');
const app = express();

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( `${__dirname}/views/partials`, (err) => {
    console.log(err);
});

//serve static content
app.use( express.static('public') );

app.get('/', function (req, res) {
  res.render('home', {
    name: 'isaias dominguez',
    title: 'Title Test'
  });
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        name: 'isaias dominguez',
        title: 'Title Test'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        name: 'isaias dominguez',
        title: 'Title Test'
    });
});


app.listen( process.env.PORT, () => {
    console.log( `example app listening port:`, process.env.PORT );
});