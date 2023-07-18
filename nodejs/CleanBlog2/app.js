const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
//TEMPLATE ENGINE
app.set('view engine', 'ejs');

app.use(express.static('public'));

const port = 3001;

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalıştı`);
});
