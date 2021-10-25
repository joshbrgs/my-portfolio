import GhostContentAPI from '@tryghost/content-api';

const { API_URL, CONTENT_API } = process.env;

const api = new GhostContentAPI({
  url: API_URL,
  key: CONTENT_API,
  version: 'v3'
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: 'all',
      include: 'tags,authors,published_at,reading_time,custom_excerpt'
    })
    .catch((err) => {
      console.error(err);
    });
}
export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
      include: 'tags,authors,published_at,reading_time,custom_excerpt'
    })
    .catch((err) => {
      console.error(err);
    });
}
// export async function getAllPostSlugs(postSlug) {
//   return await api.posts
//     .read({
//       slug: postSlug
//     })
//     .catch((err) => {
//       console.error(err);
//     });
//   return postSlug.map((slug) => {
//     return {
//       params: {
//         slug
//       }
//     };
//   });
// }
