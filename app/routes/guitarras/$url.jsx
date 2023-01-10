import { useLoaderData, useOutletContext } from '@remix-run/react'
import { useState } from 'react'
import { getGuitarra } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export const loader = async ({ params }) => {
  const { url } = params
  const guitarra = await getGuitarra(url)

  if (guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada',
    })
  }

  return guitarra
}

export const meta = ({ data }) => {
  if (!data) {
    return {
      title: 'GuitarLA - Guitarra no encontrada',
      description: 'Catalogo de guitarras, Guitarra no encontrada',
    }
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    description: `GuitarLA venta de guitarras, guitarra ${data.data[0].attributes.nombre} `,
  }
}
export const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

const Guitarra = () => {
  const { agregarAlCarrito } = useOutletContext()
  const [cantidad, setCantidad] = useState(0)
  const guitarra = useLoaderData()

  const { nombre, descripcion, precio, imagen } = guitarra.data[0].attributes

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cantidad === 0) {
      window.alert('Seleccione una cantidad mayor a 0')
      return
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      nombre,
      precio,
      cantidad,
      imagen: imagen.data.attributes.formats.small.url,
    }
    agregarAlCarrito(guitarraSeleccionada)
  }

  return (
    <main main className='contenedor guitarra'>
      <img
        className='imagen'
        src={imagen.data.attributes.formats.medium.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className='contenido'>
        <h3>{nombre}</h3>

        <p className='texto'>{descripcion}</p>
        <p className='precio'>${precio}</p>

        <form className='formulario' onSubmit={handleSubmit}>
          <label htmlFor='cantidad'>Cantidad</label>

          <select
            name='cantidad'
            id='cantidad'
            onChange={(e) => setCantidad(Number(e.target.value))}
          >
            <option value='0'>-- Seleccione --</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
          <button type='submit'>Agregar al carrito</button>
        </form>
      </div>
    </main>
  )
}

export default Guitarra
