export const getGuitarras = async () => {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  )

  return await response.json()
}

export const getGuitarra = async (url) => {
  const response = await fetch(
    `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  )

  return await response.json()
}
