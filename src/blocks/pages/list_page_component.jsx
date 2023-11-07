
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllPages} from "/src/api_axios/page_axios.js";

export function ListPages () {
    const [items, setItems] = useState({data: {success: false}});
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = JSON.parse(localStorage.getItem('user_id'));
    const is_admin = JSON.parse(localStorage.getItem('is_admin'));

    const [pages, setPages] = useState([]);
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

    const pageUsePath = window.location.pathname
    if (pageUsePath === '/my-pages' && userData || is_admin) {
        return (
            <div className="Body">
                <h3>Mis páginas</h3>
                <div className="scrollable_section">
                    {pages.map(element_page => {
                        if (element_page.created_by === userId) {
                            return (
                                <div className="webpage_square" key={element_page.id}>
                                    <h3>
                                        <Link
                                            to={`/page-list/${element_page.id}/detail`}
                                            onClick={() => {
                                                localStorage.setItem("page_id", element_page.id);
                                            }}
                                        >
                                            {element_page.page_name}
                                        </Link>
                                    </h3>
                                    <p>
                                        Page administrator: {element_page.admin} Page url:{" "}
                                        {element_page.url} Rating: {}
                                    </p>
                                </div>
                            );
                        }
                        return null; // returning null for non-matching conditions
                    })}
                </div>
            </div>
        );
    }else if (pageUsePath === '/page-list' || !userData){
        return <div className={"Body"}>
            <h3>Lista de paginas</h3>
            <div className={"scrollable_section"}>
                {pages.map(element_page => (
                    <div className="webpage_square" >
                        <h3><Link to={`/page-list/${element_page.id}/opinions`} key={element_page.id} onClick={() =>
                            JSON.parse(localStorage.setItem("page_id", element_page.id))}>{element_page.page_name}</Link></h3>
                        <p>Page administrator: {element_page.admin} Page url: {element_page.url} Rating: {}</p>
                    </div>
                ))}
            </div>
        </div>
    }
}