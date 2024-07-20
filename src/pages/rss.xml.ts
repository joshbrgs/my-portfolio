import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: any }) {
  const posts = await getCollection("posts");
  return rss({
    title: "SWE Stuff by Josh Burgess | Blog",
    description: "My Tech Blog and Journey as a SWE",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
