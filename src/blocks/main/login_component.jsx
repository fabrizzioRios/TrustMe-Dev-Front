import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {makeLogin} from "../../api_axios/tools.js";

export function LoginUser() {
    const { register, handleSubmit, formState: {
    } } = useForm();
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data=> {
        let loggedUSer = await makeLogin(data)
        localStorage.setItem('userData', JSON.stringify(loggedUSer));
        localStorage.setItem('user_id', JSON.stringify(loggedUSer.data.message.id));
        localStorage.setItem('is_admin', JSON.stringify(loggedUSer.data.message.is_superuser));
        localStorage.setItem('page_id', JSON.stringify(0));
        navigate('/home')
        window.location.reload(true);
    })
    return (
        <div>
            <article className="pale_page">
                <h2>INICIAR SESION</h2>
                <section className="scrollable_section">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="email">Correo Electronico:</label><br/>
                        <input type="email" id="email" name="email"
                               {...register("email", {required: true})}/><br/>
                        <label htmlFor="password">Contraseña:</label><br/>
                        <input type="password" id="password" name="password"
                               {...register("password", {required: true})}/><br/>
                        <button>Iniciar Sesion</button><br/>
                        <Link to={"/register-user"}>Registrarse</Link>
                    </form>
                </section>
            </article>
        </div>
    )
}