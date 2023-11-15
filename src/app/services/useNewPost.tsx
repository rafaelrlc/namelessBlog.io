import { useRouter } from "next/navigation";

interface PostType {
  title: string;
  content: string;
}

const useNewPostService = () => {
  const { push } = useRouter();

  const cancelPost = () => {
    push("/");
  };

  const confirmPost = async (post: PostType) => {
    try {
      const response = await fetch("http://localhost:8080/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
        body: JSON.stringify({
          title: post.title,
          content: post.content,
          userId: 1,
        }),
      });

      console.log(response);
      if (response.ok) {
        push("/");
      } else {
        console.error("Failed to create post");
      }
    } catch (error) {
      console.error("Failed to create post", error);
    }
  };

  return { cancelPost, confirmPost };
};

export default useNewPostService;
