import {useEffect, useState} from "react";
import {getPage} from "../../api_axios/page_axios.js";
import {Link} from "react-router-dom";

export function OpinionListPage(){
    const [items, setItems] = useState({data: {success: false}});
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = JSON.parse(localStorage.getItem('user_id'));
    const is_admin = JSON.parse(localStorage.getItem('is_admin'));
    const storedPageId = JSON.parse(localStorage.getItem('page_id'));
    const [page_data, setPageData] = useState([]);
    console.log(storedPageId)
    console.log(page_data)
    useEffect(() => {
        async function getPageData() {
            const pageData = await getPage(storedPageId);
            setPageData(pageData);
        }
        getPageData();
    }, [storedPageId]);
    if (page_data.data){
        return <div className={"Body"}>
            <h3>Opiniones de la pagina</h3>
            <div className={"scrollable_section"}>
                {/*{page_data.data.opinions.map(opinion => (*/}
                {/*    <h4 key={opinion.id}>{opinion.descripcion}</h4>*/}
                {/*))}*/}
            </div>
        </div>
    } else {
        return <div className={"Body"}>
            <h3>Opiniones de la pagina</h3>
            <div className={"scrollable_section"}>
                Aun no hay opiniones sobre esta pagina.
            </div>
        </div>
    }

}

