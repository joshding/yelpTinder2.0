const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const controller = require('../db/controller');

app.use(express.static(path.join(__dirname, '..', 'public')))
app.get('/yelp', (req, res) => {
  controller.findAll((err, data) => {
    if(err) {
      res.sendStatus(404)
    }
    res.status(200).send(data)
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})