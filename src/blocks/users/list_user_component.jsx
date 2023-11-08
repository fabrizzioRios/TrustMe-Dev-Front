// import {Link, useNavigate} from "react-router-dom";
// import {addUser} from "../api_axios/user_axios.js";
// import {useForm} from "react-hook-form";
// import {makeLogin} from "../api_axios/tools.js";


import {useEffect, useState} from "react";
import {getAllPages} from "../../api_axios/page_axios.js";
import {getAllUsers, getUser, updateUser} from "../../api_axios/user_axios.js";
import {Link, useNavigate} from "react-router-dom";

export function ListUsers() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        async function getUsers(){
            const allUsers = await getAllUsers();
            console.log(allUsers)
            setUsers(allUsers.data)
        }
        getUsers()
    }, []);

    const authenticateUser = async (userId, authenticateValue) => {
        const dataUser = await getUser(userId);
        dataUser.data.is_staff = authenticateValue
        console.log(dataUser)
        const updatedUser = await updateUser(userId, dataUser.data)
        if (updatedUser){
            window.location.reload(true);
        }
        // navigate(`/page-list/${pageId}/add-opinion`)
    };
    return (
        <div>
            <h1>Lista de usuarios</h1>
            {users.map(element_user => (
                <div key={element_user.id}>
                    <h3>{element_user.username} - ID: {element_user.id}</h3>
                    <p>
                        RFC: {element_user.rfc}<br />
                        Email: {element_user.email}
                    </p>
                    {
                        element_user.is_staff && !element_user.is_superuser ? (
                            <div>
                                <label>Autenticado</label>
                                <input type="checkbox" checked={true} />
                                <button onClick={() => authenticateUser(element_user.id, false)}>
                                    Desautenticar usuario
                                </button>
                            </div>
                        ) : element_user.is_staff && element_user.is_superuser ? (
                            <div>
                                <label>Autenticado como superusuario</label>
                                <input type="checkbox" checked={true} />
                            </div>
                        ) : (
                            <div>
                                <label>Autenticado</label>
                                <input type="checkbox" checked={false} />
                                <button onClick={() => authenticateUser(element_user.id, true)}>
                                    Autenticar usuario
                                </button>
                            </div>
                        )
                    }
                </div>
            ))}
        </div>
    );
}