import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import ReactMarkdown from "react-markdown";
const getPostContent = (slug: String) => {
  const folder = "src/posts/";
  const file = folder + slug + ".md";
  const content = fs.readFileSync(file, "utf-8");
  return content;
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);

  return <Markdown className="prose lg:prose-xl">{content}</Markdown>;
};

export default PostPage;
