import { Link } from "react-router-dom";

// ../trust_me/src/media/img/Logo.png
export function Navigation(){
    return (
        <header>
            <div className="logo_header"><img src=""/></div>
            <div className="nav">
                <Link to={"/home"}>Home</Link>
                <Link to={"/list-page"}>Catálogo de Páginas</Link>
                <Link to={"/register-user"}>Registrar Usuario</Link>
                <Link to={"/login"}>Inicio de Sesión</Link>
                <Link to={"/register-page"}>Registrar Páginas</Link>
                <Link to={"/logout"}>Cerrar Sesión</Link>
            </div>
        </header>
    )
}
