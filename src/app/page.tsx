import Post from "./components/Post";
import MenuOptions from "./components/MenuOptions";
import { getPostMetadata } from "./lib/functions";
import Header from "./components/Header";

export default function HomePage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => {
    return <Post slug={slug} key={slug} />;
  });

  return (
    <div>
      <Header title="NameLess" subTitle="" />
      <MenuOptions />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {postPreviews}
      </div>
    </div>
  );
}
