"use client";
import { useState, Suspense } from "react";
import MarkdownEditor from "@uiw/react-md-editor";
import { Button } from "@/app/components/ui/button";
import DialogPopUp from "@/app/components/DialogPopUp";
import useNewPostService from "@/app/services/useNewPost";
import { Input } from "@/app/components/ui/input";
import BadgeForm from "@/app/components/BadgeForm";
// interface PostType {
//   title: string;
//   content: string;
// }

const NewPost = () => {
  const [post, setPost] = useState({ title: "", content: "" });
  const { cancelPost, confirmPost } = useNewPostService();

  const onSubmit = (event) => {
    event.preventDefault();

    confirmPost(post);
  };

  const handleTitleChange = (event) => {
    setPost((prevState) => ({ ...prevState, title: event.target.value }));
  };

  return (
    <form>
      <Input type="email" placeholder="Título" onChange={handleTitleChange} />

      {/* Markdown editor */}
      <Suspense>
        <div data-color-mode="light" className="my-5">
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
