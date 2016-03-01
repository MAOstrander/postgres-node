'use strict';

const express = require('express');
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('postgres://localhost:5432/nodegresql');
const models = require('./models/')

const PORT = process.env.PORT || 3000;

const app = express();


app.get('/', (req, res) => {
  res.send('Hey, this is crazy')
});

app.get('/genres', (req, res) => {
  models.Genre
  .findAll()
  .then( (genres) => {
    res.send(genres);
  })
});

app.get('/mediatypes', (req, res) => {
  models.MediaType
  .findAll()
  .then( (types) => {
    res.send(types);
  })
});

app.get('/artists', (req, res) => {
  models.Artist
  .findAll()
  .then( (singer) => {
    res.send(singer);
  })
});

app.get('/playlists', (req, res) => {
  models.Playlist
  .findAll()
  .then( (tracks) => {
    res.send(tracks);
  })
});

app.get('/albums', (req, res) => {
  models.Album
  .findAll()
  .then( (cds) => {
    res.send(cds);
  })
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
