
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {deletePage, getAllPages} from "/src/api_axios/page_axios.js";

export function ListPages () {
    const [items, setItems] = useState({data: {success: false}});
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = JSON.parse(localStorage.getItem('user_id'));
    const is_admin = JSON.parse(localStorage.getItem('is_admin'));
    const navigate = useNavigate();
    const [pages, setPages] = useState([]);

    const pageRating = [];

    useEffect(() => {
        async function getPages(){
            const allPages = await getAllPages();
            setPages(allPages.data)
        }
        getPages()
        if (userData) {
            setItems(userData);
        }
    }, []);

    const opinionPage = async (pageId) => {
        localStorage.setItem("page_id", pageId)
        navigate(`/page-list/${pageId}/opinions`)
    }
    const detailPage = async (pageId) => {
        localStorage.setItem("page_id", pageId)
        navigate(`/page-list/${pageId}/detail`)
    }
    const handleDelete = async (page_id) => {
        const deletedPage = await deletePage(page_id);
        console.log(deletedPage)
        if (deletedPage) {
            window.location.reload(true);

        }}
    ;

        const pageUsePath = window.location.pathname
        if (pageUsePath === '/my-pages' && userData) {
            return (
                <div className="Body">
                    <article class="pale_page">
                    <h2>MIS PÁGINAS</h2>
                    <div className="scrollable_section">
                        {pages.map(element_page => {
                            const rating_array = []
                            element_page.opinions.map(elementop => {
                                rating_array.push(elementop.rating)
                            })
                            const findAverage = (arr) => {
                                return arr.reduce((acc, val) => acc + val, 0) / arr.length;
                            };
                            if (element_page.created_by === userId) {
                                return (
                                    <div key={element_page.id}>
                                        <h3>{element_page.page_name}</h3>
                                        <div>
                                            Page administrator: {element_page.admin}<br/>
                                            Page url: {element_page.url}<br/>
                                            Rating: {findAverage(rating_array)} / 5<br/> {/* Display ratings */}
                                            {(!element_page.admin_authenticated && !element_page.status) && (
                                                <div>
                                                    <p>
                                                        <label>Validado por los administradores:</label>
                                                        <input type="checkbox" checked={false}/><br/>
                                                        <label>Validacion externa:</label>
                                                        <input type="checkbox" checked={false}/><br/>
                                                    </p>
                                                </div>
                                            )}

                                            {element_page.admin_authenticated && !element_page.status && (
                                                <div>
                                                    <p>
                                                        <label>Validado por los administradores:</label>
                                                        <input type="checkbox" checked={true}/><br/>
                                                        <label>Validacion externa:</label>
                                                        <input type="checkbox" checked={false}/><br/>
                                                    </p>
                                                </div>
                                            )}

                                            {!element_page.admin_authenticated && element_page.status && (
                                                <div>
                                                    <p>
                                                        <label>Validado por los administradores:</label>
                                                        <input type="checkbox" checked={false}/><br/>
                                                        <label>Validacion externa:</label>
                                                        <input type="checkbox" checked={true}/><br/>
                                                    </p>
                                                </div>
                                            )}

                                            {element_page.admin_authenticated && element_page.status && (
                                                <div>
                                                    <p>
                                                        <label>Validado por los administradores:</label>
                                                        <input type="checkbox" checked={true}/><br/>
                                                        <label>Validacion externa:</label>
                                                        <input type="checkbox" checked={true}/><br/>
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    </article>
                </div>
            );
        } else if (is_admin) {
            return (
                <div className="Body">
                    <article class="pale_page">
                    <h2>MIS PÁGINAS</h2>
                    <div className="scrollable_section">
                        {pages.map(element_page => {
                            const rating_array = [];
                            element_page.opinions.map(elementop => {
                                rating_array.push(elementop.rating);
                            });
                            const findAverage = (arr) => {
                                return arr.reduce((acc, val) => acc + val, 0) / arr.length;
                            };
                            if (element_page.created_by === userId) {
                                return (
                                    <div key={element_page.id} className="webpage_square">
                                        <h3>

                                            {element_page.page_name}
                                        </h3>
                                        <div>
                                            Page administrator: {element_page.admin}<br/>
                                            Page url: {element_page.url}<br/>
                                            Rating: {findAverage(rating_array)} / 5<br/>
                                            {(!element_page.admin_authenticated && !element_page.status) && (
                                                <div>
                                                    <p>
                                                        <label>Validado por los administradores:</label>
                                                        <input type="checkbox" checked={false}/><br/>
                                                        <label>Validacion externa:</label>
                                                        <input type="checkbox" checked={false}/><br/>
                                                    </p>
                                                </div>
                                            )}

                                            {element_page.admin_authenticated && !element_page.status && (
                                                <div>
                                                    <p>
                                                        <label>Validado por los administradores:</label>
                                                        <input type="checkbox" checked={true}/><br/>
                                                        <label>Validacion externa:</label>
                                                        <input type="checkbox" checked={false}/><br/>
                                                    </p>
                                                </div>
                                            )}

                                            {!element_page.admin_authenticated && element_page.status && (
                                                <div>
                                                    <p>
                                                        <label>Validado por los administradores:</label>
                                                        <input type="checkbox" checked={false}/><br/>
                                                        <label>Validacion externa:</label>
                                                        <input type="checkbox" checked={true}/><br/>
                                                    </p>
                                                </div>
                                            )}

                                            {element_page.admin_authenticated && element_page.status && (
                                                <div>
                                                    <p>
                                                        <label>Validado por los administradores:</label>
                                                        <input type="checkbox" checked={true}/><br/>
                                                        <label>Validacion externa:</label>
                                                        <input type="checkbox" checked={true}/><br/>
                                                    </p>
                                                </div>
                                            )}
                                            <button onClick={() => opinionPage(element_page.id)}>Ver opiniones</button>
                                            <button onClick={() => detailPage(element_page.id)}>Editar</button>
                                            <button onClick={() => handleDelete(element_page.id)}>Eliminar</button>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    </article>
                </div>
            );
        } else if (pageUsePath === '/page-list' || !userData) {
            return (
                <div className="Body">
                    <article class="pale_page">
                    <h2>PÁGINAS VERIFICADAS</h2>
                    <section className="scrollable_section">
                        {pages.map(element_page => {
                            const rating_array = []
                            element_page.opinions.map(elementop => {
                                rating_array.push(elementop.rating)
                            })
                            const findAverage = (arr) => {
                                return arr.reduce((acc, val) => acc + val, 0) / arr.length;
                            };
                            return (
                                <div key={element_page.id} className="webpage_square">
                                    <h3>
                                        <Link to={`/page-list/${element_page.id}/opinions`} onClick={() =>
                                            localStorage.setItem("page_id", element_page.id)
                                        } >
                                            {element_page.page_name}
                                        </Link>
                                    </h3>
                                    <div>
                                        Page administrator: {element_page.admin}<br/>
                                        Page url: {element_page.url}<br/>
                                        Rating: {findAverage(rating_array)} / 5<br/> {/* Display ratings */}
                                        {(!element_page.admin_authenticated && !element_page.status) && (
                                            <div>
                                                <p>
                                                    <label>Validado por los administradores:</label>
                                                    <input type="checkbox" checked={false}/><br/>
                                                    <label>Validacion externa:</label>
                                                    <input type="checkbox" checked={false}/><br/>
                                                </p>
                                            </div>
                                        )}

                                        {element_page.admin_authenticated && !element_page.status && (
                                            <div>
                                                <p>
                                                    <label>Validado por los administradores:</label>
                                                    <input type="checkbox" checked={true}/><br/>
                                                    <label>Validacion externa:</label>
                                                    <input type="checkbox" checked={false}/><br/>
                                                </p>
                                            </div>
                                        )}

                                        {!element_page.admin_authenticated && element_page.status && (
                                            <div>
                                                <p>
                                                    <label>Validado por los administradores:</label>
                                                    <input type="checkbox" checked={false}/><br/>
                                                    <label>Validacion externa:</label>
                                                    <input type="checkbox" checked={true}/><br/>
                                                </p>
                                            </div>
                                        )}

                                        {element_page.admin_authenticated && element_page.status && (
                                            <div>
                                                <p>
                                                    <label>Validado por los administradores:</label>
                                                    <input type="checkbox" checked={true}/><br/>
                                                    <label>Validacion externa:</label>
                                                    <input type="checkbox" checked={true}/><br/>
                                                </p>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            );
                        })}
                    </section>
                    </article>
                </div>
            );
        }
    }

