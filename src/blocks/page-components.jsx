// import {Logo.png} from "trust_me/src/media/img;
// import "trust_me/src/media/vid/TrustME2.mp4;
import {Link, useNavigate} from "react-router-dom";
// import {useEffect, useState} from "react";
import {addUser} from "../api_axios/user_axios.js";
import {useForm} from "react-hook-form";
import {addPage} from "../api_axios/page_axios.js";
import {addRfc} from "../api_axios/rfc_axios.js";
import {makeLogin} from "../api_axios/tools.js";

export function LoginPageTemplate() {
    const { register, handleSubmit, formState: {
    } } = useForm();
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data=> {

        console.log(data)
        const response = await makeLogin(data);
        if (response.data.id_usuario === -1){
            alert("Datos incorrectos")
        } else {
            navigate('/home')
        }
    })
  return (
      <div>
          <article className="pale_page">
              <h2>INICIAR SESION</h2>
              <section className="scrollable_section">
                  <form onSubmit={onSubmit}>
                      <label htmlFor="correo">Correo ELectronico:</label>
                      <input type="email" id="correo" name="correo"
                             {...register("correo", {required: true})}/>

                      <label htmlFor="contraseña">Contraseña:</label>
                      <input type="password" id="contraseña" name="contraseña"
                             {...register("contraseña", {required: true})}/>
                      <Link to={"/register-page"}>Registrarse</Link>
                      <button>Iniciar Sesion</button>
                  </form>
              </section>
          </article>
      </div>
  )
}

export function RegisterPageTemplate(){
    const { register, handleSubmit, formState: {
    } } = useForm();

    const onSubmit = handleSubmit(async data=> {
        const response = await addPage(data);
        console.log(response)
    })
    return(
        <div className={"blue_body"}>
            <article className="pale_page">
                <h2>REGISTRA TU PAGINA</h2>
                <section className="scrollable_section">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="dominioPagina">Nombre del dominio de la Página:</label>
                        <input type="text" id="dominioPagina" name="dominioPagina"
                               {...register("dominioPagina", {required: true})}/>

                        <label htmlFor="urlPagina">URL de la Página:</label>
                        <input type="url" id="urlPagina" name="urlPagina"
                               {...register("urlPagina", {required: true})}/>

                        <label htmlFor={"registrantName"}>Empresa de registro:</label>
                        <input type="text" id="registrantName" name="registrantName"
                               {...register("registrantName", {required: true})}/>

                        {/*<labe htmlFor={""}>Entidad registrada:</label>*/}
                        {/*<input/>*/}

                        {/*<label>Ciudad de la entidad registrada:</label>*/}
                        {/*<input/>*/}

                        {/*<label>Pais de la entidad registrada:</label>*/}
                        {/*<input/>*/}

                        {/*<label>Nombre del administrador de la entidad:</label>*/}
                        {/*<input/>*/}

                        {/*<label>Ciudad del administrador de la entidad:</label>*/}
                        {/*<input/>*/}

                        {/*<label>Pais del administrador de la entidad:</label>*/}
                        {/*<input/>*/}


                        {/*<label htmlFor="curpPersona">CURP de la Persona que Registró la Página:</label>*/}
                        {/*<input type="text" id="curpPersona" name="curpPersona" pattern="[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9]{2}" placeholder="Ejemplo: ABCD123456HXYZ01" required/>*/}

                        {/*<label htmlFor="telefonoPersona">Número de Teléfono con el Cual se Registró la Página:</label>*/}
                        {/*<input type="tel" id="telefonoPersona" name="telefonoPersona" pattern="[0-9]{10}" placeholder="Ejemplo: 1234567890" required/>*/}

                        {/*<label htmlFor="correoPersona">Correo Electrónico con el Cual se Registró la Página:</label>*/}
                        {/*<input type="email" id="correoPersona" name="correoPersona" required/>*/}

                        <button>Enviar</button>
                    </form>
                </section>
            </article>
        </div>
    )
}

export function RegisterUserTemplate() {
    const { register, handleSubmit, formState: {
    } } = useForm();
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data=> {
        const rfc_submited = data.rfc
        delete data.rfc
        const response = await addUser(data);
        const add_rfc = {
            "id_usuario": response.data,
            "rfc": rfc_submited
        }
        await addRfc(add_rfc);
        navigate('/home', )
    })

    return(
        <div>
            <article className="pale_page">
                <h1>REGISTRATE</h1>
                <section className="scrollable_section">
                    <form onSubmit={onSubmit}>

                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre"
                               {...register("nombre", {required: true})}/>

                        <label htmlFor="correo">Correo Electrónico:</label>
                        <input type="email" id="correo" name="correo"
                               {...register("correo", {required: true})}/>

                        <label htmlFor="contrasena">Contraseña:</label>
                        <input type="password" id="contrasena" name="contrasena"
                               {...register("contraseña", {required: true})}/>
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

export function HomePage(){

    return(
        <div className={"Body"}>
            <div className="home_video">
                <video autoPlay muted loop src="../media/vid/TrustME2.mp4"></video>
            </div>
            <div className="about">
                <h3>Acerca de nosotros</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti laboriosam suscipit delectus qui, distinctio debitis, quasi blanditiis fugit obcaecati dignissimos fuga. Tenetur non consequuntur assumenda aspernatur fuga eos blanditiis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam, fugiat officiis, quos sunt autem velit laboriosam odio tempora expedita delectus. Rem saepe nihil nam totam fugit, modi dolorem nobis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam doloribus molestiae, error at illo recusandae, voluptas laudantium nostrum quo repellendus corrupti voluptates quae rem eius! Beatae facilis aliquid adipisci.
                </p>
            </div>
            <div className="ranking">
                <h3>Ranking</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti laboriosam suscipit delectus qui, distinctio debitis, quasi blanditiis fugit obcaecati dignissimos fuga. Tenetur non consequuntur assumenda aspernatur fuga eos blanditiis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam, fugiat officiis, quos sunt autem velit laboriosam odio tempora expedita delectus. Rem saepe nihil nam totam fugit, modi dolorem nobis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam doloribus molestiae, error at illo recusandae, voluptas laudantium nostrum quo repellendus corrupti voluptates quae rem eius! Beatae facilis aliquid adipisci.
                </p>
            </div>
            <div className="xxxx">
                <h3>XXXX</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti laboriosam suscipit delectus qui, distinctio debitis, quasi blanditiis fugit obcaecati dignissimos fuga. Tenetur non consequuntur assumenda aspernatur fuga eos blanditiis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio numquam, fugiat officiis, quos sunt autem velit laboriosam odio tempora expedita delectus. Rem saepe nihil nam totam fugit, modi dolorem nobis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam doloribus molestiae, error at illo recusandae, voluptas laudantium nostrum quo repellendus corrupti voluptates quae rem eius! Beatae facilis aliquid adipisci.
                </p>
            </div>
        </div>
    )
}

