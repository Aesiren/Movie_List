const express = require('express');
const cors = require('cors');
const app = express();

const port = 8080;
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log('Server listening on port ', port);
})

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to server' });
})

app.get('/movies', (req, res) => {
  knex('movies')
    .select('*')
    .from('movies')
    .then(data => {
      res.status(200).json(data);
    })
})

app.get('/movies/:id', (req, res) => {
  knex('movies')
    .select('*')
    .from('movies')
    .where('id', req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
})

app.post('/movies/new', async (req, res) => {
  let data = req.body;

  try {
    await knex('movies').insert(data);
    res.status(200).json({ message: 'Data saved' });
    console.log('Data saved');
  } catch (err) {
    console.error('ERROR: ', err);
    res.status(500).json({ error: "Failed to save data" });
  }
})

app.delete('/movies/:id/delete', async (req, res) => {
  try {
    await knex('movies').where('id', req.params.id).del();
    console.log('Deleted Item');
    res.status(200).json({ message: "Item Deleted" });
  } catch (err) {
    console.error("ERROR: ", err);
    res.status(500).json({ error: "Failed to delete item" });
  }
})

app.patch('/movies/:id/update', async (req, res) => {
  const data = req.body;
  const id = req.params.id;

  try {
    await knex('movies').where('id', id).update(data);
    console.log('Item updated');
    res.status(200).json({ message: "Item Updated" });
  } catch (err) {
    console.error("ERROR: ", err);
    res.status(500).json({ error: "Failed to update item" });
  }
})

module.exports = app;