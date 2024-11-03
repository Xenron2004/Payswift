const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const path = require('path');
const { Readable } = require('stream'); 

const DOMAIN = 'https://payswift-eta.vercel.app';

async function generateSitemap() {
  const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },  // Single-page application main URL
  ];

  const sitemapStream = new SitemapStream({ hostname: DOMAIN });
  const xmlString = await streamToPromise(
    Readable.from(links).pipe(sitemapStream)
  ).then((data) => data.toString());

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), xmlString);
  console.log('Sitemap generated at /public/sitemap.xml');
}

generateSitemap();
