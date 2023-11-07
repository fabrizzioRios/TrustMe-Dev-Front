import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {getAllOpinions} from "../../api_axios/opinion_axios.js";
import {deletePage, getPage} from "../../api_axios/page_axios.js";

export function OpinionList(){
    const [items, setItems] = useState({data: {success: false}});
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = JSON.parse(localStorage.getItem('user_id'));
    const is_admin = JSON.parse(localStorage.getItem('is_admin'));
    const pageId = JSON.parse(localStorage.getItem('page_id'));
    const navigate = useNavigate()


    const [opinions, setOpinions] = useState([]);
    useEffect(() => {
        async function getOpinions(){
            const allPages = await getAllOpinions();
            setOpinions(allPages.data)
        }
        getOpinions()
        if (userData) {
            setItems(userData);
        }
    }, []);

    const handleAddOpinion = async () => {
        navigate(`/page-list/${pageId}/add-opinion`)
    };

    const pageUsePath = window.location.pathname
    if (pageUsePath === '/my-opinions' && userData) {
        return (
            <div className="Body">
                <h3>Mis opiniones</h3>
                <div className="scrollable_section">
                    {opinions.map(opinion_page => {
                        if (opinion_page.user === userId) {
                            return (
                                <div className="webpage_square" key={opinion_page.id}>
                                    <h3>{opinion_page.title}</h3>
                                    <p>
                                        Descripcion: {opinion_page.descripcion}<br/>
                                        Pagina: {opinion_page.page_id}<br/>
                                        Puntuacion: {opinion_page.rating} / 5<br/>
                                        Fecha: {opinion_page.creation_date}<br/>
                                        Usuario: {opinion_page.user}<br/>
                                    </p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }else if (pageUsePath === '/opinions-list'){
        return <div className={"Body"}>
            <h3>Lista de paginas</h3>
            <div className={"scrollable_section"}>
                {opinions.map(opinion_page => {
                    return (
                        <div className="webpage_square" key={opinion_page.id}>
                            <h3>{opinion_page.title}</h3>
                            <p>
                                Descripcion: {opinion_page.descripcion}<br/>
                                Pagina: {opinion_page.page_id}<br/>
                                Puntuacion: {opinion_page.rating} / 5<br/>
                                Fecha: {opinion_page.creation_date}<br/>
                                Usuario: {opinion_page.user}<br/>
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    } else if (pageUsePath === `/page-list/${pageId}/opinions`){
        return <div className={"Body"}>
            <h3>Opiniones de la pagina</h3>
            <button onClick={handleAddOpinion}>Añadir opinion</button>
            <div className={"scrollable_section"}>
                {opinions.map(opinion_page => {
                    if (opinion_page.page_id === pageId)
                    return (
                        <div className="webpage_square" key={opinion_page.id}>
                            <h3>{opinion_page.title}</h3>
                            <p>
                                Descripcion: {opinion_page.descripcion}<br/>
                                Pagina: {opinion_page.page_id}<br/>
                                Puntuacion: {opinion_page.rating} / 5<br/>
                                Fecha de creacion: {opinion_page.creation_date}<br/>
                                Usuario: {opinion_page.user}<br/>
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    }
}