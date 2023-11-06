import { Link } from "react-router-dom";
import {useEffect, useState} from "react";
export function Navigation() {
    const [items, setItems] = useState({ data: { success: false } });

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            setItems(userData);
        }
    }, []);

    if (items && items.data && items.data.success) {
        return (
                <header>
                    <Link to={"/home"}><h1 className="logo_header"><img src="Logo.png" alt="Logo" /></h1></Link>
                    <div className="nav">
                        <Link to={"/home"}>Home</Link>
                        <Link to={"/list-page"}>Catálogo de Páginas</Link>
                        <Link to={"/my-pages"}>Mis páginas</Link>
                        {/*<Link to={"/my-profile"}>Mi perfil</Link>*/}
                        <Link to={"/register-page"}>Registrar Página</Link>
                        <Link to={"/logout"}>Cerrar Sesión</Link>
                    </div>
                </header>
            );
    } else {
        return (
            <header>
                <Link to={"/home"}><h1 className="logo_header"><img src="Logo.png" alt="Logo" /></h1></Link>
                <div className="nav">
                    <Link to={"/home"}>Home</Link>
                    <Link to={"/list-page"}>Catálogo de Páginas</Link>
                    <Link to={"/register-user"}>Registrar Usuario</Link>
                    <Link to={"/login"}>Inicio de Sesión</Link>
                </div>
            </header>
        );
    }
}




