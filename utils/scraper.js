const puppeteer = require('puppeteer');

const scrapeJobs = async () => {
  const extractJobs = async (url) => {
    const page = await browser.newPage();
    // Bypass anti scraping bots
    const userAgent = 'Mozilla/5.0 (X11; Linux x86_64)' + 'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
    await page.setUserAgent(userAgent);
    await page.goto(url);

    console.log(url);

    // Scrape data
    const jobsOnPage = await page.evaluate(() => 
      Array.from(document.querySelectorAll('#active-search-results tbody'))
      .map(compact => ({
        title: compact.querySelector('.table--advanced-search__title').innerText.trim(),
        date: compact.querySelector('.table--advanced-search__date').innerText.trim(),
        //location: compact.querySelector('.table-col-2 span').innerText.trim(),
        description: compact.querySelector('.expandable--advanced-search__bottom p span').innerText.trim(),
        link: "https://jobs.apple.com", //WIP Link
        company: "Apple Inc."
      }))
    )
    await page.close();

    const nextPageNumber = parseInt(url.match(/page=(\d+)$/)[1], 10) + 1;

    if(nextPageNumber > 50) {
      console.log('finished');
      return jobsOnPage
    } else {
      // Fetch next page
      const nextUrl = `https://jobs.apple.com/en-us/search?&page=${nextPageNumber}`;
      return jobsOnPage.concat(await extractJobs(nextUrl));
    }
  }

  const browser  = await puppeteer.launch({
    headless: true,
  });
  const firstUrl = `https://jobs.apple.com/en-us/search?&page=1`;
  const jobs = await extractJobs(firstUrl);

  await browser.close();
  console.log(jobs);
  return jobs;
}

module.exports.scrapeJobs = scrapeJobs;