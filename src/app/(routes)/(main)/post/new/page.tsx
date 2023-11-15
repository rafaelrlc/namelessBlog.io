"use client";
import { useState, Suspense } from "react";
import MarkdownEditor from "@uiw/react-md-editor";
import { Button } from "@/app/components/ui/button";
import DialogPopUp from "@/app/components/DialogPopUp";
import useNewPostService from "@/app/services/useNewPost";
import { Input } from "@/app/components/ui/input";

interface PostType {
  title: string;
  content: string;
}

const NewPost = () => {
  const [post, setPost] = useState<PostType>({ title: "", content: "" });
  const { cancelPost, confirmPost } = useNewPostService();

  const onSubmit = (event: any) => {
    event.preventDefault();
    confirmPost(post);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prevState) => ({ ...prevState, title: event.target.value }));
  };

  return (
    <form className="flex flex-col gap-5">
      <Input type="email" placeholder="Título" onChange={handleTitleChange} />
      <Suspense>
        <div data-color-mode="light">
          <MarkdownEditor
            onChange={(newValue) =>
              setPost((prevState) => ({ ...prevState, content: newValue }))
            }
            value={post.content}
            height={475}
          />
        </div>
      </Suspense>

      <div className="grid grid-cols-2 gap-3">
        <DialogPopUp
          dialogConfirm={cancelPost}
          dialogTitle="Deseja cancelar a publicação?"
          dialogDescription="Se você sair agora, perderá todo o progresso."
          dialogStyles="w-full"
          dialogTrigger={
            <Button className="w-full mt-4 mb-6" variant="ghost">
              Cancelar
            </Button>
          }
        />
        <Button className="w-full mt-4 mb-6" onClick={onSubmit}>
          Publicar
        </Button>
      </div>
    </form>
  );
};

export default NewPost;
