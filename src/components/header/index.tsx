import { Link } from "react-router-dom"

export function Header(){
  return (
    <header>
      <h1>Bem-vindo</h1>
      
      <div>
        <Link to={'/sobre'}>Sobre</Link>
        <Link to={'/contato'}>Contato</Link>
        <Link to={'/produto'}>Produto</Link>
      </div>

      <hr />
    </header>
  )
}
