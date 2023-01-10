import Navbar from "./navbar"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contenedor contenido">
        <Navbar />
        <p className="copyright">Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
