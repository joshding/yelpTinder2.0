const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const controller = require('../db/controller');

app.use(express.static(path.join(__dirname, '..', 'public')))
app.get('/yelp', (req, res) => {
  controller.findAll((err, data) => {
    if(err) {
      console.log('here is error server side: ', err);
      res.sendStatus(404)
    }

    res.status(200).send(data)
  });
});
app.get('/imageurls', (req, res) => {
  controller.findAll((err, data) => {
    if(err) {
      res.sendStatus(404)
    }
    const imageURLs = data.map(business => business.images[0]);
    res.status(200).send(imageURLs);
  });
});
app.get('/favorites', (req,res) => {
  controller.getFavorites((err, data) => {
    res.status(200).send(data);
  })
});
app.put('/favorite/:id', (req, res) => {
  controller.toggleFavorite(req.params.id, (err, data) => {
    res.status(200).send(data);
  })
});
app.put('/favorites',(req, res) => {
  controller.resetFavorites((err,data) => {
    if(err) {
      res.sendStatus(404);
    }
    console.log('favorites reset');
    res.sendStatus(200);
  })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})