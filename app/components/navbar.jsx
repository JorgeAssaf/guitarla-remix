import { Link, useLocation } from '@remix-run/react'
import cartImg from '../../public/img/cart.svg'
const Navbar = () => {
  const location = useLocation()
  return (
    <nav className='navegacion'>
      <Link className={location.pathname === '/' ? 'active' : ''} to='/'>
        Inicio
      </Link>
      <Link
        className={location.pathname === '/nosotros' ? 'active' : ''}
        to='/nosotros'
      >
        Nosotros
      </Link>
      <Link
        className={location.pathname === '/guitarras' ? 'active' : ''}
        to='/guitarras'
      >
        Tienda
      </Link>
      <Link
        className={location.pathname === '/blogs' ? 'active' : ''}
        to='/blogs'
      >
        Blog
      </Link>{' '}
      <Link
        className={location.pathname === '/carrito' ? 'active' : ''}
        to='/carrito'
      >
        <img src={cartImg} alt="Carrito" />
      </Link>


    </nav>
  )
}

export default Navbar
