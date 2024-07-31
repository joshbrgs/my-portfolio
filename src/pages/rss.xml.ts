import rss from "@astrojs/rss";
import { MediumArticles } from "medium-article-api";

export async function GET(context: { site: any }) {
  const mediumArticles = MediumArticles();
  const username = "burgessj247";

  interface MediumBlog {
    title: string;
    pubDate: string;
    categories: string[];
    description: string;
    author: string;
  }

  const posts = await mediumArticles.getData(username);

  return rss({
    title: "SWE Stuff by Josh Burgess | Blog",
    description: "My Tech Blog and Journey as a SWE",
    site: context.site,
    items: posts.items.map((post: MediumBlog) => ({
      title: post.title,
      pubDate: post.pubDate,
      description: post.description,
      link: `/blog/${post.title}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
