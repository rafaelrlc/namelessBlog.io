import Markdown from "markdown-to-jsx";
import { Badge } from "@/app/components/ui/badge";
import { Avatar, AvatarImage } from "@/app/components/ui/avatar";
import DialogPopUp from "@/app/components/DialogPopUp";
import HoverCardPopUp from "@/app/components/HoverCardPopUp";
import { Button } from "@/app/components/ui/button";

interface PostPageProps {
  params: {
    slug: string;
  };
}

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

const PostPage = async (props: PostPageProps) => {
  const slug = props.params.slug;
  console.log(slug);

  let content = "";

  const response = await fetch(`http://localhost:8080/api/post/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

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
                    Rafael Ribeiro
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
              <p className="text-sm text-gray-500">1 min read</p>
              <span className="pb-1 text-gray-600">•</span>
              <p className="text-sm text-gray-500">26/10/2023</p>
            </div>
          </div>
        </div>
        <ul className="flex gap-2 mb-2">{postBadges}</ul>
      </div>

      <Markdown className="prose lg:prose-xl">{data.content}</Markdown>
    </div>
  );
};

export default PostPage;
