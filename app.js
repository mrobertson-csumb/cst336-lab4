const express = require('express');
const app = express();

app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));

// routes
app.route('/').get((req, resp) => resp.render('index.html', {nav: req.url}));
app.get('/mercury', (req, resp) => resp.render('mercury.html', {nav: req.url}));
app.get('/venus', (req, resp) => resp.render('venus.html', {nav: req.url}));
app.get('/earth', (req, resp) => resp.render('earth.html', {nav: req.url}));
app.get('/mars', (req, resp) => resp.render('mars.html', {nav: req.url}));
// app.get('/venus', (req, resp) => resp.send('Venus Page'));


// server listener
app.listen(process.env.PORT, () => console.log('express server is running...'));
