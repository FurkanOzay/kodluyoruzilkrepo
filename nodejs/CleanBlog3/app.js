const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo')

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//TEMPLATE ENGINE
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const port = 3001;

app.get('/', async (req, res) => {
  const photos = await Photo.find({})
  res.render('index', {
    photos
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/photos', async (req,res) => {
  await Photo.create(req.body)
  res.redirect('/')
})


app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalıştı`);
});
