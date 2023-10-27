import React from "react";
import Markdown from "markdown-to-jsx";
import { Badge } from "@/app/components/ui/badge";
import { Avatar, AvatarImage } from "@/app/components/ui/avatar";
import DialogPopUp from "@/app/components/DialogPopUp";
import HoverCardPopUp from "@/app/components/ui/HoverCardPopUp";
import { Button } from "@/app/components/ui/button";
import { getPostContent } from "@/app/lib/functions";

interface PostPageProps {
  params: {
    slug: string;
  };
}
const badgesList = [
  <Badge variant="blue">Anime 🍥</Badge>,
  <Badge variant="green">Art 🎨</Badge>,
  <Badge variant="yellow">Inspiration ✨</Badge>,
];

const PostPage = (props: PostPageProps) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);

  const postBadges = badgesList.map((badge) => {
    return (
      <li>
        <DialogPopUp dialogTrigger={badge} />
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

      <Markdown className="prose lg:prose-xl">{content}</Markdown>
    </div>
  );
};

export default PostPage;
