import { Link } from '@remix-run/react'
import Navbar from './navbar'
import logo from '../../public/img/logo.svg'
const Header = () => {

  return (
    <header className='header '>
      <div className='contenedor barra'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='Imagen del logo' />
          </Link>
        </div>
        <Navbar />

      </div>
      {/* <div className='contenedor'>
        <h2 className='
        heading'>Guitarras 1</h2>
      </div> */}
    </header>
  )
}

export default Header
