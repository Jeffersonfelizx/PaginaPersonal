const Filter =({filter, setFilter, categorias, setCategorias}) =>{

    return(
        <div className="filter">
        <div className="filter-options">
            <div>
                <p>filtrar por categoria</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)} >
                    <option value="All">Todos </option>
                    <option value="Complete">Completas</option>
                    <option value="Incomplete">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Categorias</p>
                <select value={categorias} onChange={(e) => setCategorias(e.target.value)}>
                    <option value="trabalho">Trabalho</option>
                    <option value="pessoal">Pessoal</option>
                    <option value="estudos">Estudos</option>
                </select>
            </div>
        </div>
        </div>
    )

}
    
export default Filter; 