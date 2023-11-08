import {deletePage} from "../../api_axios/page_axios.js";
import {useEffect, useState} from "react";
import {getUser, updateUser} from "../../api_axios/user_axios.js";
import {useNavigate} from "react-router-dom";

export function UserProfile(){
    const [user, setUser] = useState();
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = JSON.parse(localStorage.getItem('user_id'));
    const is_admin = JSON.parse(localStorage.getItem('is_admin'));
    const pageId = JSON.parse(localStorage.getItem('page_id'));
    const navigate = useNavigate()
    useEffect(() => {
        getUserData(userId)
    }, []);
    const updateUser = async (user_id) => {
        navigate(`/user/${user_id}/detail`)
    };
    const getUserData = async (user_id) => {
        const getdataUser = await getUser(user_id)
        setUser(getdataUser.data)
    }
    if (user){
        return(
            <div>
                <h2>Mi perfil</h2>
                <p>
                    Username: {user.username}<br/>
                    Correo electronico: {user.email}<br/>
                    Nombre: {user.first_name} {user.last_name}<br/>
                    RFC: {user.rfc}
                </p>
                <button onClick={() => updateUser(user.id)}>Editar</button>
            </div>
        )
    }
}