"use client";
import { useState } from "react";
import MarkdownEditor from "@uiw/react-md-editor";
import { Button } from "@/app/components/ui/button";
import DialogPopUp from "@/app/components/DialogPopUp";

const NewPost = () => {
  const [value, setValue] = useState("**Hello world!!!**");

  return (
    <form>
      <div data-color-mode="light">
        <MarkdownEditor
          onChange={(newValue = "") => setValue(newValue)}
          value={value}
          height={475}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <DialogPopUp
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
