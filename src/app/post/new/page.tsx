"use client";
import { useState, Suspense } from "react";
import MarkdownEditor from "@uiw/react-md-editor";
import { Button } from "@/app/components/ui/button";
import DialogPopUp from "@/app/components/DialogPopUp";
import NewPostService from "@/app/services/newPost";

const NewPost = () => {
  const [value, setValue] = useState("");

  const { cancelPost, confirmPost } = NewPostService();

  return (
    <form className="flex flex-col gap-5">
      <Suspense>
        <div data-color-mode="light">
          <MarkdownEditor
            onChange={(newValue = "") => setValue(newValue)}
            value={value}
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
        <Button className="w-full mt-4 mb-6 ">Publicar</Button>
      </div>
    </form>
  );
};

export default NewPost;
