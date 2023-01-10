const Curso = ({ curso }) => {
  return (
    <section className='curso'>
      <style jsx={'true'}>
        {`
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 /0.8),
                rgb(0 0 0 /0.7)
              ),
               url(${curso.attributes.imagen.data.attributes.url});
          }
        `}
      </style>
      <div className='contenedor curso-grid'>

        <div className='contenido'>
          <h2 className='heading'>{curso.attributes.titulo}</h2>
          <p className='texto'>{curso.attributes.contenido}</p>
        </div>
      </div>
    </section>
  )
}

export default Curso
