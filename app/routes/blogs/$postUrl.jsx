import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/post.server'
import { formatDate } from '~/utils/helpers'

import styles from '~/styles/blog.css'

export const meta = ({ data }) => {
  const post = data?.data[0]?.attributes
  if (!post) {
    return {
      title: 'GuitarLA - Post no encontrado',
      description: 'GuitarLA - Post no encontrado',
    }
  }
  return {
    title: `GuitarLA - ${post.titulo}`,
    description: `GuitarLA - Blog de ${post.titulo} `,
  }
}

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const loader = async ({ params }) => {
  const post = await getPost(params.postUrl)
  if (post.data.length === 0) {
    throw new Response('', { status: 404, statusText: 'Post no encontrado' })
  }
  return post
}

const Post = () => {
  const post = useLoaderData()
  const { imagen, titulo, contenido, publishedAt } = post.data[0].attributes

  return (
    <article className='contenedor post mt'>
      <img
        className='imagen'
        src={imagen.data[0].attributes.url}
        alt={`Blog - ${post.titulo}`}
      />
      <div className='contenido'>
        <h3>{titulo}</h3>
        <p className='fecha'>{formatDate(publishedAt)}</p>
        <p className='texto'>{contenido}</p>
      </div>
    </article>
  )
}

export default Post
