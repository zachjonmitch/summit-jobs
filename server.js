const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cheerio = require('cheerio');
const axios = require('axios');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const url = "https://jobs.apple.com/en-us/search?sort=relevance&search="

app.post('/api/scrape', (req, res) => {
  axios.get(`${url}${req.body.query}`)
    .then(body => {
      const jobs = [];
      const $ = cheerio.load(body.data);

      $('.results tbody').each((i, el) => {
        const $title = $(el).find('.table--advanced-search__title');
        const $date = $(el).find('.table--advanced-search__date');
        const $location = $(el).find('.table-col-2 span');
        const $description = $(el).find('.expandable--advanced-search__bottom p span');
        const $link = $(el).find('.table--advanced-search__title').attr('href');

        const job = {
          title: $title.text(),
          date: $date.text(),
          location: $location.text(),
          description: $description.text(),
          company: "Apple Inc.",
          link: "https://jobs.apple.com" + $link
        };
        jobs.push(job)
      })
      res.send(jobs);
    })
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));