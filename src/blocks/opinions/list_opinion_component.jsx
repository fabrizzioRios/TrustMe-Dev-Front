import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {deleteOpinion, getAllOpinions} from "../../api_axios/opinion_axios.js";
import {deletePage, getPage} from "../../api_axios/page_axios.js";
import {getUser} from "../../api_axios/user_axios.js";

export function OpinionList(){
    const [items, setItems] = useState({data: {success: false}});
    const [pageCreatedBy, setCreatedBy] = useState();
    const [pageTitle, setPageTitle] = useState();
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
        const getCreatedById = async () => {
            const dataPage = await getPage(pageId);
            console.log(dataPage)
            setPageTitle(dataPage.data.page_name)
            setCreatedBy(dataPage.data.created_by)
        }
        getCreatedById()

        if (userData) {
            setItems(userData);
        }
    }, []);

    const handleAddOpinion = async () => {
        navigate(`/page-list/${pageId}/add-opinion`)
    };
    const delOpinion = async (idOpinion) => {
        const deletedOpinion = await deleteOpinion(idOpinion)
        if (deletedOpinion) {
            window.location.reload(true);
        }
    }

    const updOpinion = async (newpageId, idOpinion) => {
        navigate(`/page-list/${newpageId}/${idOpinion}/detail`)
    }

    const goBackPage = async () => {
        navigate(`/page-list`)
    }

    const pageUsePath = window.location.pathname
    if (pageUsePath === '/my-opinions' && userData) {
        return (
            <div className="Body">
                <article className="pale_page">
                <h2>MIS OPINIONES</h2>
                <div className="scrollable_section">
                    {opinions.map(opinion_page => {
                        if (opinion_page.user === userId) {
                            return (
                                <div className="webpage_square" key={opinion_page.id}>
                                    <h3>{opinion_page.title}</h3>
                                    <p>
                                        Descripcion: {opinion_page.descripcion}<br/>
                                        Pagina: {pageTitle}<br/>
                                        Puntuacion: {opinion_page.rating} / 5<br/>
                                        Fecha: {opinion_page.creation_date}<br/>
                                        Usuario: {}<br/>
                                    </p>
                                </div>
                            );
                        }
                    })}
                </div>
                </article>
            </div>
        );
    }else if (pageUsePath === `/opinions-list` && userData){
        return <div className={"Body"}>
            <article className="pale_page">
            <h2>LISTA DE OPINIONES</h2>
            <div className={"scrollable_section"}>
                {opinions.map(opinion_page => {
                    console.log(opinion_page.id)

                    return (
                        <div key={opinion_page.id} className="webpage_square">
                            <h3>{opinion_page.title}</h3>
                            <p>
                                Descripcion: {opinion_page.descripcion}<br/>
                                Pagina: {pageTitle}<br/>
                                Puntuacion: {opinion_page.rating} / 5<br/>
                                Fecha: {opinion_page.creation_date}<br/>
                                Usuario: {}<br/>
                            </p>
                            <button onClick={() => delOpinion(opinion_page.id)}>Borrar</button>
                            <button onClick={() => updOpinion(opinion_page.page_id, opinion_page.id)}>Editar</button>
                        </div>
                    );
                })}
            </div>
            </article>
        </div>
    } else if (pageUsePath === `/page-list/${pageId}/opinions`){
        if (userId === pageCreatedBy || !userData){
            return <div className={"Body"}>
                <article className="pale_page">
                <h2>OPINIONES DE MI PÁGINA</h2>
                <button onClick={goBackPage}>Regresar</button>
                <div className={"scrollable_section"}>
                    {opinions.map(opinion_page => {
                        if (opinion_page.page_id === pageId)
                            return (
                                <div key={opinion_page.id} className="webpage_square">
                                    <h3>{opinion_page.title}</h3>
                                    <p>
                                        Descripcion: {opinion_page.descripcion}<br/>
                                        Pagina: {pageTitle}<br/>
                                        Puntuacion: {opinion_page.rating} / 5<br/>
                                        Fecha de creacion: {opinion_page.creation_date}<br/>
                                        Usuario: {}<br/>
                                    </p>
                                </div>
                            );
                    })}
                </div>
                </article>
            </div>
        } else {
            return <div className={"Body"}>
                <article className="pale_page">
                <h2>OPINIONES DE LA PÁGINA</h2>
                <button onClick={handleAddOpinion}>Añadir opinion</button>
                <button onClick={goBackPage}>Regresar</button>
                <div className={"scrollable_section"}>
                    {opinions.map(opinion_page => {
                        if (opinion_page.page_id === pageId)
                            return (
                                <div key={opinion_page.id} className="webpage_square">
                                    <h3>{opinion_page.title}</h3>
                                    <p>
                                        Descripcion: {opinion_page.descripcion}<br/>
                                        Pagina: {pageTitle}<br/>
                                        Puntuacion: {opinion_page.rating} / 5<br/>
                                        Fecha de creacion: {opinion_page.creation_date}<br/>
                                        Usuario: {}<br/>
                                    </p>
                                </div>
                            );
                    })}
                </div>
                </article>
            </div>
        }

    }
}