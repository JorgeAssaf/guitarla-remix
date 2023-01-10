export const getPosts = async () => {
  const response = await fetch(
    `${process.env.API_URL}/posts?populate=imagen`
  )

  return await response.json()
}

export const getPost = async (url) => {
  const response = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
  )

  return await response.json()
}
