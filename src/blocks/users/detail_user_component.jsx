
import {deleteUser, getUser, updateUser} from "../../api_axios/user_axios.js";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

export function DetailUser(){
    const [items, setItems] = useState({data: {success: false}});
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = JSON.parse(localStorage.getItem('user_id'));
    const is_admin = JSON.parse(localStorage.getItem('is_admin'));
    const storedPageId = JSON.parse(localStorage.getItem('page_id'));

    // const [page_data, setPageData] = useState([]);
    // const [updated_data, dataPageUpd] = useState([]);
    const navigate = useNavigate()
    const { setValue, register, handleSubmit} = useForm();
    useEffect(() => {
        if (userData){
            setItems(userData)
            getUserData()
        }
        async function getUserData(){
            const dataUser = await getUser(userId)
            console.log(dataUser)
            const new_data = {
                "email": userData.data.message.email,
                "password": userData.data.message.password
            }
            console.log(new_data)
            // const dataUser = await makeLogin(new_data)
            setValue('username', dataUser.data.username)
            setValue('first_name', dataUser.data.first_name)
            setValue('last_name', dataUser.data.last_name)
            setValue('email', dataUser.data.email)
            setValue('password', dataUser.data.password)
            setValue('rfc', dataUser.data.rfc)
        }
    }, []);
    const onSubmit = handleSubmit(async data =>{
        console.log(data)
        const updateUserData = await updateUser(userId, data)
        if (updateUserData){
            window.location.reload(true);
        }
    })
    //
    const handleDelete = async () => {
        const storedUserId = JSON.parse(localStorage.getItem('userId'));
        if (storedUserId) {
            const deletedUser = await deleteUser(storedUserId);
            console.log(deletedUser)
            if (deletedUser) {
                navigate(`/my-profile`)
            }
        }
    };
    const goBackPage = async () => {
        navigate(`/my-profile`)
    }
    if(is_admin){
        return (
            <div>
                <article className="pale_page">
                    <h1>Edita tus datos</h1>
                    <section className="scrollable_section">
                        <form onSubmit={onSubmit}>
                            <label htmlFor="username">Nombre de usuario:</label>
                            <input type="text" id="username" name="username"
                                   {...register("username", {required: true})}/>
                            <label htmlFor="first_name">Nombre:</label>
                            <input type="text" id="first_name" name="first_name"
                                   {...register("first_name", {required: true})}/>
                            <label htmlFor="last_name">Apellido:</label>
                            <input type="text" id="last_name" name="last_name"
                                   {...register("last_name", {required: true})}/>

                            <label htmlFor={"rfc"}>RFC:</label>
                            <input type={"text"} id={"rfc"} name={"rfc"}
                                   {...register("rfc", {required: true})}/>
                            <div>
                                <button type="submit">Enviar</button>
                                <button onClick={goBackPage}>Regresar</button>
                            </div>
                            <p>Nota: Superusuarios no pueden ser eliminados</p>
                        </form>
                    </section>
                </article>
            </div>
        )
    } else {
        return (
            <div>
                <article className="pale_page">
                    <h1>Edita tus datos</h1>
                    <section className="scrollable_section">
                        <form onSubmit={onSubmit}>
                            <label htmlFor="username">Nombre de usuario:</label>
                            <input type="text" id="username" name="username"
                                   {...register("username", {required: true})}/>
                            <label htmlFor="first_name">Nombre:</label>
                            <input type="text" id="first_name" name="first_name"
                                   {...register("first_name", {required: true})}/>
                            <label htmlFor="last_name">Apellido:</label>
                            <input type="text" id="last_name" name="last_name"
                                   {...register("last_name", {required: true})}/>
                            <label htmlFor="email">Correo Electrónico:</label>
                            <input type="email" id="email" name="email"
                                   {...register("email", {required: true})}/>
                            <label htmlFor="password">Contraseña:</label>
                            <input type="password" id="password" name="password"
                                   {...register("password", {required: true})}/>
                            <label htmlFor={"rfc"}>RFC:</label>
                            <input type={"text"} id={"rfc"} name={"rfc"}
                                   {...register("rfc", {required: true})}/>
                            {is_admin ? (
                                <div>
                                    <button type="submit">Enviar</button>
                                    <button onClick={handleDelete}>Eliminar</button>
                                    <button onClick={goBackPage}>Regresar</button>
                                </div>
                            ) : (
                                <div>
                                    <button type="submit">Enviar</button>
                                    <button onClick={goBackPage}>Regresar</button>
                                </div>
                            )}
                        </form>
                    </section>
                </article>
            </div>
        )
    }

}