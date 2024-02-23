import { useState } from "react"
import ProjetosBi from "../../components/ProjetosBi"
import foto1 from '../../assets/img/paginaInicial/Generation/Java-01.png'

function Projetos() {
  const[projetos,setProjetos] = useState(
    [{
        id:1,
        titulo:"Projeto 1",
        foto:{foto1},
        sobre:"sobre",
        link:"link"
    }]
    )


  return (
    <>
    <div className="projetos">
      <h1 className="projetos-h1">Projetos</h1>
      {projetos.map((projeto) =>(
        <ProjetosBi projeto={projeto} key={projeto.id}/>
      ))}
    </div>
    </>
  )
}

export default Projetos

