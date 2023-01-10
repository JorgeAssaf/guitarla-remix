import { useState, useEffect } from 'react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/carrito.css'

export const meta = () => {
  return {
    title: 'GuitarLA - Carrito de compras',
    description: 'Carrito de compras de GuitarLA',
  }
}

export const links = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

const Carrito = () => {
  const [total, setTotal] = useState(0)
  const { carrito, actualizarCantidad, setCarrito } = useOutletContext()

  useEffect(() => {
    const total = carrito.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    )
    setTotal(total)
  }, [carrito])

  const deleteProduct = (id) => {
    const newCarrito = carrito.filter((producto) => producto.id !== id)
    setCarrito(newCarrito)
  }

  return (
    <ClientOnly fallback={'loading...'}>
      {() => (
        <main className='contenedor'>
          <h2 className='heading'>Carrito de compras</h2>
          <div className='contenido'>
            <div className='carrito'>
              <h2>Articulos</h2>
              {carrito?.length === 0 || null ? (
                <p>No hay articulos en el carrito</p>
              ) : (
                carrito?.map((productos) => (
                  <div key={productos?.id} className='producto'>


                    <img src={productos?.imagen} alt={productos?.nombre} />
                    <div className='info'>
                      <p className='nombre'>{productos?.nombre}</p>
                      <p className='cantidad'>Cantidad: </p>

                      <select
                        name='cantidad'
                        id='cantidad'
                        value={productos.cantidad}
                        onChange={(e) =>
                          actualizarCantidad({
                            id: productos?.id,
                            cantidad: Number(e.target.value),
                          })
                        }
                      >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                      </select>

                      <p className='precio'>
                        Precio: <span>${productos.precio}</span>
                      </p>
                      <p className='subtotal'>
                        SubTotal :{' '}
                        <span>${productos.precio * productos.cantidad}</span>
                      </p>
                      <button className='buton' onClick={() => deleteProduct(productos.id)}>
                        Eliminar
                      </button>
                    </div>

                  </div>

                ))
              )}

            </div>
            <aside className='resumen'>
              <h3>Resumen del pedido</h3>
              {carrito?.length === null || 0 ? (
                <p>No hay articulos en el carrito</p>
              ) : (
                <p>Hay {carrito?.length} articulos en el carrito</p>
              )}
              <p>Total a pagar: ${total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  )
}

export default Carrito
