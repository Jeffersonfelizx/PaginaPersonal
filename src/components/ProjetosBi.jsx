
const ProjetosBi = ({projeto}) =>{

    return<>
    <div className="projetos-bloco">
        <div className="projetos-blocos">
          <h1>{projeto.titulo}</h1>
          <img src="{projeto.foto}" alt="" />
          <h1>{projeto.sobre}</h1>
          <h1>{projeto.link}</h1>
        </div>
      </div>
    </>


}

export default ProjetosBi;