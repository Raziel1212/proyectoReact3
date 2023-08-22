

const Buscador = ({onChange, search }) => {

    return(

        <form className="d-flex mb-3" role="search">
        <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Busca un colaborador" 
        aria-label="Search"
        value={search}
        onChange={onChange}
        />
      </form>
    )
}

export default Buscador
