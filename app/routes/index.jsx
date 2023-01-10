import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/post.server'
import { getCurso } from '~/models/curso.server'
import ListadoGuitarras from '~/components/listado-guitarras'
import ListadoPost from '~/components/listado-post'
import Curso from '~/components/curso'

import styleGuitarras from '~/styles/guitarras.css'
import styleBlog from '~/styles/blog.css'
import styleCurso from '~/styles/curso.css'

export const meta = () => {
  return {
    title: 'GuitarLA - Inicio',
    description: 'GuitarLA - Catalogo, Post y Cursos',
  }
}

export const links = () => {
  return [
    { rel: 'stylesheet', href: styleGuitarras },
    { rel: 'stylesheet', href: styleBlog },
    { rel: 'stylesheet', href: styleCurso },
  ]
}

export const loader = async () => {
  const [guitarras, posts, curso] = await Promise.all([getGuitarras(), getPosts(), getCurso()])

  return {
    guitarras: guitarras?.data,
    posts: posts?.data,
    curso: curso?.data,
  }
}
const Index = () => {
  const { guitarras, posts, curso } = useLoaderData()


  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <Curso curso={curso} />
      <article className='contenedor'>
        <ListadoPost posts={posts} />
      </article>


    </>
  )
}

export default Index
