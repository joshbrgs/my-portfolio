import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import NavBar from "../src/components/navbar/navbar.astro";

test("BlogPost with slots", async () => {
  const container = await AstroContainer.create();
  // const result = await container.renderToString(NavBar, {
  //   props: { title: "Title Here", url: "fake" },
  // });
  const result = await container.renderToString(NavBar);

  expect(result).not.toContain("This is a BlogPost");
  expect(result).toContain("Blog");
});
