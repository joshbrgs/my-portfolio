import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

//Work on creating Dynamic Sitemap
// import { getAllPostSlugs } from '../../lib/posts';

// export default async (res, req) => {
//   try {
//     //Dynamic post function
//     const links = [];
//     getAllPostSlugs().map((post) => {
//       links.push({
//         url: `/blog/posts/${post.params.slug}`,
//         changefreq: 'daily',
//         priority: 0.9
//       });
//     });

//     //Add main pages
//     const pages = ['/404', '/blog'];
//     pages.map((url) => {
//       links.push({
//         url,
//         changefreq: 'daily',
//         priority: 0.9
//       });
//     });

//     const smStream = new SitemapStream({
//       hostname: `https://${req.headers.host}`
//     });

//     res.writeHead(200, {
//       'Content-Type': 'application/xml'
//     });

//     const xmlString = await streamToPromise(
//       Readable.from(links).pipe(smStream)
//     ).then((data) => data.toString());

//     res.end(xmlString);
//   } catch (e) {
//     console.log(e);
//     res.send(JSON.stringify(e));
//   }
// };

//Temporary Hard coded Sitemap
export default async (req, res) => {
  const links = [
    { url: '/blog/post/hello-world', frequency: 'daily', priority: 0.3 },
    { url: '/blog/post/twitter-bot', frequency: 'daily', priority: 0.3 },
    { url: '/blog', frequency: 'daily', priority: 0.3 },
    { url: '/404', frequency: 'daily', priority: 0.3 }
  ];

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-Type': 'application/xml'
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
