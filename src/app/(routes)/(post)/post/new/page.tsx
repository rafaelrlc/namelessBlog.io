'use client'
import { useState } from 'react'
import MarkdownEditor from '@uiw/react-md-editor'
import { Button } from '@/app/components/ui/button'
import DialogPopUp from '@/app/components/dialog-popup'
import { NewPostService } from '@/app/services/new-post-service'
import { Input } from '@/app/components/ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  title: z.string().min(1, 'Title is required').max(50, 'Title is too long'),
  content: z
    .string()
    .min(1, 'Content is required')
    .max(20000, 'Content is too long')
    .optional(),
})

const NewPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })

  const [content, setContent] = useState('# Hello, world!')
  const { cancelPost, confirmPost } = NewPostService()

  const onSubmit = (data: any) => {
    // TODO: content validation

    confirmPost({
      title: data.title,
      content,
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Título" {...register('title')} />

      {/* {errors.title && (
        <span className="text-red-500 text-sm">{errors.title?.message}</span>
      )} */}

      {/* Markdown editor */}
      <div data-color-mode="light" className="my-5">
        <MarkdownEditor
          onChange={(newContent) => {
            setContent(newContent || '')
          }}
          value={content}
          height={475}
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <DialogPopUp
          dialogConfirm={cancelPost}
          dialogTitle="Deseja cancelar a publicação?"
          dialogDescription="Se você sair agora, perderá todo o progresso."
          dialogStyles="w-full"
          dialogTrigger={
            <Button className="mb-6 mt-4 w-full" variant="ghost">
              Cancelar
            </Button>
          }
        />
        <Button className="mb-6 mt-4 w-full" onClick={onSubmit}>
          Publicar
        </Button>
      </div>
    </form>
  )
}

export default NewPost
