import { Link } from "react-router-dom"
import "../../styles/PaginaInicial/index.css"

function NavBar() {
  return (
    <div>
       <nav id="nav">
        <h1 id="logo">Jefferson Felix</h1>
        <ul className="nav-list">
            <li className="nav-item"><a><Link to="/">Home</Link></a></li>
            <li className="nav-item"><a><Link to="/sobre">Sobre</Link></a></li>
            <li className="nav-item"><a><Link to="/contato">Contato</Link></a></li>
            <li className="nav-item"><a><Link to="/projetos">Projetos</Link></a></li>
            <li className="nav-item"><a><Link to="/cursos">Cursos</Link></a></li>
        </ul>
    </nav>
    </div>
  )
}

export default NavBar
