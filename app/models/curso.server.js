export const getCurso = async () => {
  const response = await fetch(
    `${process.env.API_URL}/curso?populate=imagen`
  )

  return await response.json()
}