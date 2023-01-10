import { useLoaderData } from '@remix-run/react'
import ListadoPost from '~/components/listado-post'
import { getPosts } from '~/models/post.server'
import styles from '~/styles/blog.css'

export const meta = () => {
  return {
    title: 'GuitarLA - Nuestro Blog',
    description: 'GuitarLA - Blog de música y guitarras',
  }
}

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export const loader = async () => {
  const post = await getPosts()

  return post?.data
}

const Blog = () => {
  const posts = useLoaderData()
  return (
    <main className='contenedor'>
      <ListadoPost posts={posts} />
    </main>
  )
}

export default Blog
