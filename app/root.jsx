import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react'
import { useEffect, useState } from 'react'
import Footer from '~/components/footer'
import Header from '~/components/header'

import styles from './styles/index.css'
import normalize from './styles/normalize.css'

export const meta = () => ({
  charset: 'utf-8',
  title: 'GuitarLA - Remix',
  viewport: 'width=device-width,initial-scale=1',
})

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: normalize,
    },
    { rel: 'stylesheet', href: styles },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
      as: 'font',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true',
      as: 'font',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;800;900&display=swap',
      rel: 'stylesheet',
      crossOrigin: 'true',
      as: 'font',
    },
  ]
}

export default function App() {
  const initialState =
    typeof window != 'undefined'
      ? JSON.parse(localStorage.getItem('carrito')) || []
      : null
  const [carrito, setCarrito] = useState(initialState)
  const agregarAlCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      const carritoActualizado = carrito.map((guitarraState) => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad
        }
        return guitarraState
      })
      setCarrito(carritoActualizado)
    } else {
      setCarrito([guitarra, ...carrito])
    }
  }
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  const actualizarCantidad = (guitarra) => {
    const carritoActualizado = carrito.map((guitarraState) => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad
      }
      return guitarraState
    })
    setCarrito(carritoActualizado)
  }

  return (
    <Document>
      <Outlet
        context={{
          agregarAlCarrito,
          carrito,
          actualizarCantidad,
          setCarrito,
        }}
      />
    </Document>
  )
}

function Document({ children }) {
  return (
    <html lang='en'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        <Scripts />

        <LiveReload />
      </body>
    </html>
  )
}

export function CatchBoundary() {
  const error = useCatch()

  return (
    <Document>
      <p className='error'>
        {error.status} - {error.statusText}
        <Link className='error-enlace' to='/'>
          Talves quieras ir a Inicio
        </Link>
      </p>
    </Document>
  )
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <p className='error'>
        {error.status} - {error.statusText}
        <Link className='error-enlace' to='/'>
          Talves quieras ir a Inicio
        </Link>
      </p>
    </Document>
  )
}
