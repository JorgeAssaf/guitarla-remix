import { Link } from '@remix-run/react'

const Guitarras = ({ guitarra }) => {
  return (
    <div className='guitarra'>
      <img
        src={guitarra.imagen.data.attributes.formats.medium.url}
        alt={`Imagen guitarra ${guitarra.nombre}`}
      />
      <div className='contenido'>
        <h3>{guitarra.nombre}</h3>
        <p className='descripcion'>{guitarra.descripcion}</p>
        <p className='precio'>${guitarra.precio}</p>
        <Link className='enlace' to={`/guitarras/${guitarra.url}`}>
          Ver Guitarra
        </Link>
      </div>
    </div>
  )
}

export default Guitarras
