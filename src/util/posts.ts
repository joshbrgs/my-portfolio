import { GhostClient } from '../lib/GhostClient';

export async function getPosts() {
	return await GhostClient.posts
		.browse({
			limit: 'all',
			include: 'tags,authors,published_at,reading_time,custom_excerpt',
		})
		.catch(err => {
			console.error(err);
		});
}
export async function getSinglePost(postSlug: any) {
	return await GhostClient.posts
		.read({
			slug: postSlug,
			include: 'tags,authors,published_at,reading_time,custom_excerpt',
		})
		.catch(err => {
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
