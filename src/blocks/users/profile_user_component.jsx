import {deletePage} from "../../api_axios/page_axios.js";
import {useEffect} from "react";
import {updateUser} from "../../api_axios/user_axios.js";
import {useNavigate} from "react-router-dom";

export function UserProfile(){
    const navigate = useNavigate()

    const updateUser = async () => {
        navigate("/my-profile/detail")
    };

    return(
        <div className={"scrollable_section"}>
            <h3>Mi perfil</h3>
            <button onClick={updateUser}>Editar</button>
        </div>
    )
}