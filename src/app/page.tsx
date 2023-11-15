import Post from "./components/Post";
import MenuOptions from "./components/MenuOptions";
import { getPostMetadata } from "./lib/functions";
import Header from "./components/Header";

export default async function HomePage() {
  const postMetadata = getPostMetadata();

  const response = await fetch(`http://localhost:8080/api/post`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  });

  const data = await response.json();
  console.log(data);

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
