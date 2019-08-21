const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const scraper = require('./utils/scraper');
const mongodb = require('./utils/db');

const jobs = require('./routes/jobs');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/jobs', jobs);

app.get('/api/scrape', (req, res) => {
  const resultsCollection = mongodb.get().db('jobs').collection('results');
  scraper.scrapeJobs().then((jobResults) => {
    resultsCollection.insertMany(jobResults, (error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
    });
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  mongodb.connect();
});