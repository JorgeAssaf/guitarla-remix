import { Link } from '@remix-run/react'
import { formatDate } from '~/utils/helpers'

const Post = ({ post }) => {

  return (
    <article className='post'>
      <img
        className='imagen'
        src={post.imagen.data[0].attributes.formats.small.url}
        alt={`Blog - ${post.titulo}`}
      />
      <div className='contenido'>
        <h3>{post.titulo}</h3>
        <p className='fecha'>{formatDate(post.publishedAt)}</p>
        <p className='resumen'>{post.contenido}</p>
        <Link className='enlace' to={`/blogs/${post.url}`}>Leer más</Link>
      </div>
    </article>
  )
}

export default Post
