import { nanoid } from 'nanoid'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const storage = useStorage()
  
  const body = await readBody(event)
  const { content, author } = body

  if (!content || !author) {
    throw createError({
      statusCode: 400,
      message: 'Content and author are required'
    })
  }

  const comment = {
    id: nanoid(),
    author,
    content,
    createdAt: new Date().toISOString()
  }

  const comments = await storage.getItem(`comments:${slug}`) || []
  const updatedComments = [...comments, comment]
  
  await storage.setItem(`comments:${slug}`, updatedComments)
  return comment
})