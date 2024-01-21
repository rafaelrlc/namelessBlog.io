import Markdown from 'markdown-to-jsx'
import { Avatar, AvatarImage } from '@/app/components/ui/avatar'
import useBadgeById from '@/app/hooks/use-tags'
import HoverCardUserProfile from '@/app/components/hover-card-profile'
import { Button } from '@/app/components/ui/button'
import { notFound } from 'next/navigation'
import { estimateReadingTime } from '@/app/lib/functions/estimate-reading-time'

interface PostPageProps {
  params: {
    slug: string
  }
}

// export async function generateStaticParams() {
//   const posts = await fetch("http://localhost:8080/api/post", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((res) => res.json());

//   return posts.map((post: any) => ({
//     slug: post.id.toString(),
//   }));
// }

const getData = async (slug: string) => {
  const response = await fetch(`http://localhost:8080/api/post/${slug}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 15,
    },
  })

  if (!response.ok) return undefined
  return response.json()
}

const tagsId = [{ id: 1 }, { id: 2 }, { id: 3 }]

const PostPage = async ({ params }: PostPageProps) => {
  const { slug } = params
  const data = await getData(slug)

  if (!data) {
    notFound()
  }

  data.tags = tagsId // TODO: get tags from API

  // const postTags = data.tags.map((tagId: any) => {
  //   const badge = useBadgeById(tagId.id)
  //   return <li key={tagId}>{badge}</li>
  // })ß

  const date = new Date(data.date)
  const normalDateOrder = date.toLocaleDateString('en-GB')
  const readingTime = estimateReadingTime(data.content)

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <Avatar className="my-5">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <HoverCardUserProfile
                hoverTrigger={
                  <Button variant="link" size="link">
                    {data?.author?.name}
                  </Button>
                }
              />
            </div>
            <div className="flex items-center gap-3">
              <p className="mr-1 text-sm text-gray-500">{normalDateOrder}</p>
            </div>
          </div>
        </div>

        <ul className="mb-2 flex gap-2"></ul>
      </div>
      <div className="flex flex-col">
        <h1 className="mt-2 inline-block pb-5 text-4xl font-semibold leading-tight lg:text-5xl">
          {data.title}
        </h1>
        <Markdown className="prose break-all lg:prose-xl">
          {data.content}
        </Markdown>
      </div>
    </div>
  )
}

export default PostPage
