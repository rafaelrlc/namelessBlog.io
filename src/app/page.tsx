import Post from "./components/PostBox";
import MenuOptions from "./components/MenuOptions";
import Header from "./components/Header";
import { notFound } from "next/navigation";

interface PostType {
  id: number;
  title: string;
  content: string;
}

const getData = async () => {
  const response = await fetch(`http://localhost:8080/api/post`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // next: {
    //   revalidate: 15,
    // },
    cache: "no-store",
  });

  if (!response.ok) return undefined;
  return response.json();
};

export default async function Home() {
  const data = await getData();

  if (!data) {
    return notFound();
  }

  return (
    <div>
      {/* <MenuOptions /> */}
      <h1 className="font-small text-lg  pb-5">Postagens</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {data.map((post: PostType) => {
          return (
            <Post
              title={post.title}
              key={post.id}
              id={post.id}
              content={post.content}
            />
          );
        })}
      </div>
    </div>
  );
}
