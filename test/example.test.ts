import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import BlogPost from "../src/components/BlogPost.astro";

test("BlogPost with slots", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(BlogPost, {
    props: { title: "Title Here", url: "fake" },
  });

  expect(result).not.toContain("This is a BlogPost");
  expect(result).toContain("Title Here");
});
