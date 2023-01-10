import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '~/components/listado-guitarras'
import { getGuitarras } from '~/models/guitarras.server'
import styles from '~/styles/guitarras.css'

export const meta = () => {
  return {
    title: 'GuitarLA - Tienda',
    description: 'Catalogo de guitarras',

  }
}

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }]

}

export async function loader() {
  const guitarra = await getGuitarras()
  return guitarra.data
}

const Tienda = () => {
  const guitarras = useLoaderData()
  return (
    <main className='contenedor'>
      <ListadoGuitarras guitarras={guitarras} />
    </main>
  )
}

export default Tienda
