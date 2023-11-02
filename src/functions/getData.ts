import fs from "fs";

export const getPostContent = (slug: String) => {
  const folder = "src/posts/";
  const file = folder + slug + ".md";
  const content = fs.readFileSync(file, "utf-8");
  return content;
};

export const getPostMetadata = () => {
  const folder = "src/posts/";
  const files = fs.readdirSync(folder);
  const mardownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = mardownPosts.map((post) => post.replace(".md", ""));
  return slugs;
};
