
// import {Link, useNavigate} from "react-router-dom";
// import {addUser} from "../api_axios/user_axios.js";
// import {useForm} from "react-hook-form";
// import {makeLogin} from "../api_axios/tools.js";


export function DetailUser(){
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
                        <button>Enviar</button>
                    </form>
                </section>
            </article>
        </div>
    )
}
