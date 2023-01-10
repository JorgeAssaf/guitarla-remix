import Guitarras from '~/components/guitarras'
const ListadoGuitarras = ({ guitarras }) => {
  return (
    <>
      <h2 className='heading'>Nustra Coleccion</h2>
      {guitarras?.length && (
        <div className='guitarras-grid'>
          {guitarras?.map((guitarra) => (
            <Guitarras key={guitarra?.id} guitarra={guitarra?.attributes} />
          ))}
        </div>
      )}
    </>
  )
}

export default ListadoGuitarras
