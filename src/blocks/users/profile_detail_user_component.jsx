// import {deleteUser} from "../../api_axios/user_axios.js";

import {useNavigate} from "react-router-dom";

export function UserProfileDetail(){
    const navigate = useNavigate()

    const goBackwards= async () => {
        navigate("/my-profile")
    }
    // const handleDelete = async () => {
    //     if (storedPageId) {
    //         const deletedUser = await deleteUser(userId);
    //         if (deletedUser) {
    //             deletePageStoredData();
    //         }
    //     }
    // };

    return(
        <div className={"scrollable_section"}>
            <h3>Detalle de mi perfil</h3>
            <button>Guardar</button>
            <button>Eliminar</button>
            <button onClick={goBackwards}>Regresar</button>
        </div>
    )
}