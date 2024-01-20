import { useRouter } from "next/navigation";
import { useToast } from "../components/ui/use-toast";

interface PostType {
  title: string;
  content: string;
}

export const NewPostService = () => {
  const { push } = useRouter();
  const { toast } = useToast();

  const cancelPost = () => {
    push("/");
  };

  const confirmPost = async (post: PostType) => {
    try {
      const response = await fetch("http://localhost:8080/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: post.title,
          content: post.content,
          userId: 1,
        }),
      });

      if (response.ok) {
        toast({
          title: "Post criado com sucesso!",
          variant: "accept",
        });
        push("/");
      } else {
        toast({
          title: "Erro ao criar post!",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Failed to create post", error);
    }
  };

  return { cancelPost, confirmPost };
};
