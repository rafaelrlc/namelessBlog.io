import Markdown from "markdown-to-jsx";
import { Badge } from "@/app/components/ui/badge";
import { Avatar, AvatarImage } from "@/app/components/ui/avatar";
import DialogPopUp from "@/app/components/DialogPopUp";
import HoverCardPopUp from "@/app/components/HoverCardPopUp";
import { Button } from "@/app/components/ui/button";
import { notFound } from "next/navigation";
import { estimateReadingTime } from "@/app/lib/functions";

const badgesList = [
  {
    id: 1,
    badge: <Badge variant="blue">Anime 🍥</Badge>,
  },
  {
    id: 2,
    badge: <Badge variant="green">Art 🎨</Badge>,
  },
  {
    id: 3,
    badge: <Badge variant="yellow">Inspiration ✨</Badge>,
  },
];

interface PostPageProps {
  params: {
    slug: string;
  };
}

// export async function generateStaticParams() {
//   const posts = await fetch("http://localhost:8080/api/post", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => res.json());

//   return posts.map((post: any) => ({
//     slug: post.id.toString(),
//   }));
// }

const getData = async (slug: String) => {
  const response = await fetch(`http://localhost:8080/api/post/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) return undefined;
  return response.json();
};

const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = params;
  const data = await getData(slug);

  if (!data) {
    notFound();
  }

  const date = new Date(data.date);
  const normalDateOrder = date.toLocaleDateString("en-GB");
  const readingTime = estimateReadingTime(data.content);

  const postBadges = badgesList.map((badge) => {
    return (
      <li key={badge.id}>
        <DialogPopUp dialogTrigger={badge.badge} />
      </li>
    );
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-4 items-center justify-center">
          <Avatar className="my-5">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <div className="flex flex-col">
            <div className="flex gap-3 items-center">
              <HoverCardPopUp
                hoverTrigger={
                  <Button variant="link" size="link">
                    {data?.author?.name}
                  </Button>
                }
              />
              <span className="pb-1 text-gray-600">•</span>
              <DialogPopUp
                dialogTitle="Follow Rafael Ribeiro?"
                dialogTrigger={
                  <button className="text-green-600 hover:text-green-700">
                    Follow
                  </button>
                }
              />
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-sm text-gray-500">{readingTime} min read</p>
              <span className="pb-1 text-gray-600">•</span>
              <p className="text-sm text-gray-500">{normalDateOrder}</p>
            </div>
          </div>
        </div>
        <ul className="flex gap-2 mb-2">{postBadges}</ul>
      </div>

      <Markdown className="prose lg:prose-xl break-all">
        {data.content}
      </Markdown>
    </div>
  );
};

export default PostPage;
