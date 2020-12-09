const express = require('express');
const Song = require('./lib/models/songs');
const app = express();

app.use(express.json());

app.post('/api/v1/songs', (req, res, next) => {
  Song
    .insert(req.body)
    .then(song => res.send(song))
    .catch(next);

});

app.get('/api/vi/songs/id:', (req, res, next) => {
  Song
    .insert(req.body)
    .then(song => res.send(song))
    .catch(next);
});

app.put('/api/v1/songs/:id', (req, res, next) => {
  Song
    .findById(req.params.id)
    .then(song => res.send(song))
    .catch(next);
});

app.delete('/api/v1/songs/:id', (req, res, next) => {
  Song
    .findById(req.params.id)
    .delete(song => res.send(song))
    .catch(next);
});
