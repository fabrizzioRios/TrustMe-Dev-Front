
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";


export function UserPagesList() {
    const [items, setItems] = useState({data: {success: false}});
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = JSON.parse(localStorage.getItem('user_id'));
    const is_admin = JSON.parse(localStorage.getItem('is_admin'));
    console.log(items)
    useEffect(() => {
        if (userData) {
            setItems(userData);
        }
    }, []);
    return <div className={"Body"}>
        <h3>Mis paginas</h3>
        <div className={"scrollable_section"}>
            Mis paginas
            {/*{items.data.message.pages.map(element_page => (*/}
            {/*    // eslint-disable-next-line react/jsx-key*/}
            {/*    <div className="webpage_square" >*/}
            {/*        <h3><Link to={`/page_list/${element_page.id}/detail`} key={element_page.id} onClick={() =>*/}
            {/*            JSON.parse(localStorage.setItem("page_id", element_page.id))}>{element_page.page_name}</Link></h3>*/}
            {/*        <p>Page administrator: {element_page.admin} Page url: {element_page.url} Rating: {}</p>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    </div>

}