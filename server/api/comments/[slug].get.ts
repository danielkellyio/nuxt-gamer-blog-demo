export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const storage = useStorage()
  
  const comments = await storage.getItem(`comments:${slug}`) || []
  return comments
})