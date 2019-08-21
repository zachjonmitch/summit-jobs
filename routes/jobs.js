const express = require('express');
const router = express.Router();

const mongodb = require('../utils/db');

router.get('/', (req, res) => {
  const resultsCollection = mongodb.get().db('jobs').collection('results');
  resultsCollection.find().toArray().then((jobResults) => {
    console.log(jobResults);
  });
})

module.exports = router;