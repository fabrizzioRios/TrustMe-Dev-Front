import { Link } from "react-router-dom";
export function Navigation(){
    return (
        <header>
            <Link to={"/home"}><h1 className="logo_header"><img src="Logo.png"/></h1></Link>
            <div className="nav">
                <Link to={"/home"}>Home</Link>
                <Link to={"/list-page"}>Catálogo de Páginas</Link>
                <Link to={"/register-user"}>Registrar Usuario</Link>
                <Link to={"/register-opinion"}>Registrar Opinion</Link>
                <Link to={"/register-page"}>Registrar Páginas</Link>
                <Link to={"/login"}>Inicio de Sesión</Link>
                <Link to={"/logout"}>Cerrar Sesión</Link>
            </div>
        </header>
    )
}
