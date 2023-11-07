import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {getUser, addUser} from "/src/api_axios/user_axios.js";

import {makeLogin} from "../../api_axios/tools.js";

import {useEffect, useState} from "react";

export function RegisterUserTemplate() {
    const { register, handleSubmit, formState: {
    } } = useForm();
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data=> {
        console.log(data)
        let addedUSer = await addUser(data)
        if (addedUSer){
            const new_data = {
                "email": data.email,
                "password": data.password
            }
            const logIn = await makeLogin(new_data)
            if (logIn){
                console.log(logIn)
                localStorage.setItem('userData', JSON.stringify(logIn));
                navigate('/home')
            }
        }
    })

    return(
        <div>
            <article className="pale_page">
                <h1>REGISTRATE</h1>
                <section className="scrollable_section">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="username">Nombre de usuario:</label><br/>
                        <input type="text" id="username" name="username"
                               {...register("username", {required: true})}/><br/>
                        <label htmlFor="first_name">Nombre:</label><br/>
                        <input type="text" id="first_name" name="first_name"
                               {...register("first_name", {required: true})}/><br/>
                        <label htmlFor="last_name">Apellido:</label><br/>
                        <input type="text" id="last_name" name="last_name"
                               {...register("last_name", {required: true})}/><br/>
                        <label htmlFor="email">Correo Electrónico:</label><br/>
                        <input type="email" id="email" name="email"
                               {...register("email", {required: true})}/><br/>
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password"
                               {...register("password", {required: true})}/><br/>
                        <label htmlFor={"rfc"}>RFC:</label><br/>
                        <input type={"text"} id={"rfc"} name={"rfc"}
                               {...register("rfc", {required: true})}/><br/>
                        <button>Registrarse</button><br/>
                        <Link to={"/login"}>Login</Link>
                    </form>
                </section>
            </article>
        </div>
    )
}