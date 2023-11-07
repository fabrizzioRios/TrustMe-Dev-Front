import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
export function Navigation() {
    const [items, setItems] = useState({data: {success: false}});
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = JSON.parse(localStorage.getItem('user_id'));
    const is_admin = JSON.parse(localStorage.getItem('is_admin'));

    useEffect(() => {
        if (userData) {
            setItems(userData);
        }
    }, []);

    if (userData) {
        if (is_admin){
            return (
                <header>
                    <Link to={"/home"}><h1 className="logo_header"><img src="/Logo.png" alt="Logo" /></h1></Link>
                    <div className="nav">
                        <Link to={"/home"}>Home</Link>
                        <Link to={"/page-list"}>Lista de paginas</Link>
                        <Link to={"/users-list"}>Lista de usuarios</Link>
                        <Link to={"/opinions-list"}>Lista de opiniones</Link>
                        <Link to={"/my-profile"}>Mi perfil</Link>
                        <Link to={"/register-page"}>Registrar Página</Link>
                        <Link to={"/logout"}>Cerrar Sesión</Link>
                    </div>
                </header>
            );
        } else {
            return (
                <header>
                    <Link to={"/home"}><h1 className="logo_header"><img src="/Logo.png" alt="Logo" /></h1></Link>
                    <div className="nav">
                        <Link to={"/home"}>Home</Link>
                        <Link to={"/page-list"}>Catálogo de Páginas</Link>
                        <Link to={"/my-pages"}>Mis páginas</Link>
                        <Link to={"/my-opinions"}>Mis opiniones</Link>
                        <Link to={"/my-profile"}>Mi perfil</Link>
                        <Link to={"/register-page"}>Registrar Página</Link>
                        <Link to={"/logout"}>Cerrar Sesión</Link>
                    </div>
                </header>
            );
        }
    } else {
        return (
            <header>
                <Link to={"/home"}><h1 className="logo_header"><img src="/Logo.png" alt="Logo" /></h1></Link>
                <div className="nav">
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/page-list"}>Catálogo de Páginas</Link>
                    <Link to={"/register-user"}>Registrar Usuario</Link>
                    <Link to={"/login"}>Inicio de Sesión</Link>
                </div>
            </header>
        );
    }
}




