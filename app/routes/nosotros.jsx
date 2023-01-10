import nosotrosImg from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export const meta = () => ({
  title: 'GuitarLA - Nosotros',
  description: 'Venta de guitarras, musica ',
})

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preload',
      href: nosotrosImg,
      as: 'image',
    },
  ]
}

const Nosotros = () => {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>

      <div className='contenido'>
        <img src={nosotrosImg} alt='Imagen sobre nosotros' />

        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            officiis blanditiis adipisci earum velit accusamus praesentium,
            ipsum doloremque qui corrupti quam optio reiciendis suscipit
            tempora, perspiciatis at assumenda expedita quibusdam? At maxime
            tempore voluptate unde exercitationem tenetur nihil rerum. Nulla
            exercitationem voluptate explicabo quia cupiditate sequi sunt
            inventore modi error, vero ut veritatis, nihil facilis fugit quidem
            natus officiis tempore. Sapiente sint repellendus accusamus fuga
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            aliquid commodi eligendi at rerum id tenetur? Beatae maxime eaque
            eum sit hic impedit, vero quibusdam cumque neque expedita iusto
            illum.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
