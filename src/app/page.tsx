import Post from "./components/Post";
import fs from "fs";

const getPostMetadata = () => {
  const folder = "src/posts/";
  const files = fs.readdirSync(folder);
  const mardownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = mardownPosts.map((post) => post.replace(".md", ""));
  return slugs;
};

export default function HomePage() {
  const postMetadata = getPostMetadata();

  const postPreviews = postMetadata.map((slug) => {
    return <Post slug={slug} />;
  });

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">{postPreviews}</div>
  );
}
