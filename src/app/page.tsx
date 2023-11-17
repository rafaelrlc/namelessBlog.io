import Post from "./components/Post";
import MenuOptions from "./components/MenuOptions";
import Header from "./components/Header";
import { notFound } from "next/navigation";

interface PostType {
  id: number;
  title: string;
}

const getData = async () => {
  const response = await fetch(`http://localhost:8080/api/post`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) return undefined;
  return response.json();
};

export default async function HomePage() {
  const data = await getData();
  if (!data) {
    return notFound();
  }
  const postPreviews = data.map((slug: PostType) => {
    return <Post title={slug.title} key={slug.id} id={slug.id} />;
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
