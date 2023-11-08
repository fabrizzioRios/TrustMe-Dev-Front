

import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {addOpinion} from "../../api_axios/opinion_axios.js";
import {getUser} from "../../api_axios/user_axios.js";
import {makeLogin} from "../../api_axios/tools.js";

export function RegisterOpinion() {
    const navigate = useNavigate();
    const [items, setItems] = useState({data: {success: false}});
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = JSON.parse(localStorage.getItem('user_id'));
    const is_admin = JSON.parse(localStorage.getItem('is_admin'));
    const storedPageId = JSON.parse(localStorage.getItem('page_id'));
    const { register, handleSubmit, formState: {
    } } = useForm();
    console.log(userData)
    console.log(userId)
    console.log(is_admin)
    console.log(storedPageId)
    const goBackPage = async () => {
        navigate(`/page-list/${storedPageId}/opinions`)
    }
    const onSubmit = handleSubmit(async data=> {
        console.log(data)
        data['page_id'] = storedPageId
        data['user'] = userId
        if (userData){
            const createdOpinon = await addOpinion(data);
            if (createdOpinon){
                const getData = await getUser(userId)
                console.log(getData)
                const user_data_log = {
                    "email": getData.data.email,
                    "password": getData.data.password
                }
                const updatedUser = await makeLogin(user_data_log);
                if (updatedUser){
                    localStorage.setItem('userData', JSON.stringify(updatedUser));
                    navigate(`/page-list/${storedPageId}/opinions`)
                }
            }
        }
    })
    return(
        <div>
            <h1>Publicar Texto</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="title">Titulo:</label><br/>
                <input type="text" id="title" name="title"
                       {...register("title", {required: true})}/><br/>

                <label htmlFor="descripcion">Descripcion:</label><br/>
                <input type="text" id="descripcion" name="descripcion"
                       {...register("descripcion", {required: true})}/><br/>

                <label htmlFor="rating">Rating:</label><br/>
                <select
                    id="rating"
                    name="rating"
                    {...register("rating", { required: true })}
                >
                    <option value="">Select a rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select><br/>

                <input type="hidden" id="page_id" name="page_id"
                       {...register("page_id")}/><br/>

                <input type="hidden" id="user" name="user"
                       {...register("user")}/>

                <button type="submit">Enviar</button><br/>
                <button onClick={goBackPage}>Regresar</button><br/>
            </form>
        </div>
    )
}