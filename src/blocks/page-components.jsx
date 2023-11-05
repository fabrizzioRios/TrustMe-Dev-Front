// import {Logo.png} from "trust_me/src/media/img;
// import "trust_me/src/media/vid/TrustME2.mp4;
import {Link, useNavigate} from "react-router-dom";
// import {useEffect, useState} from "react";
import {addUser} from "../api_axios/user_axios.js";
import {useForm} from "react-hook-form";
import {addPage, getAllPages} from "../api_axios/page_axios.js";
import {makeLogin} from "../api_axios/tools.js";
import {useEffect, useState} from "react";
import {ReactVideoPage} from "./tools_components.jsx";

export function LoginPageTemplate() {
    const { register, handleSubmit, formState: {
    } } = useForm();
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data=> {
        console.log(data)
        let loggedUSer = await makeLogin(data)
        console.log(loggedUSer)

        navigate('/home')
    })
  return (
      <div>
          <article className="pale_page">
              <h2>INICIAR SESION</h2>
              <section className="scrollable_section">
                  <form onSubmit={onSubmit}>
                      <label htmlFor="email">Correo Electronico:</label>
                      <input type="email" id="email" name="email"
                             {...register("email", {required: true})}/>
                      <label htmlFor="password">Contraseña:</label>
                      <input type="password" id="password" name="password"
                             {...register("password", {required: true})}/>
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
                        <label htmlFor="pageName">Nombre de la Página:</label>
                        <input type="text" id="pageName" name="pageName"
                               {...register("page_name", {required: true})}/>
                        <label htmlFor="pageUrl">URL de la Página:</label>
                        <input type="url" id="pageUrl" name="pageUrl"
                               {...register("url", {required: true})}/>
                        <label htmlFor={"domainName"}>Nombre de dominio de la Página:</label>
                        <input type="text" id="domainName" name="domainName"
                               {...register("domain_name", {required: true})}/>
                        <label htmlFor={"nameServers"}>Nombre de servidores:</label>
                        <input type="text" id="nameServers" name="nameServers"
                               {...register("name_servers", {required: true})}/>
                        <label htmlFor={"registrant"}>Registrante</label>
                        <input type="text" id="registrant" name="registrant"
                               {...register("registrar", {required: true})}/>
                        <label htmlFor={"registrantName"}>Nombre del registrante:</label>
                        <input type="text" id="registrantName" name="registrantName"
                               {...register("registrant_name", {required: true})}/>
                        <label htmlFor={"registrantCity"}>Ciudad del registrante:</label>
                        <input type="text" id="registrantCity" name="registrantCity"
                               {...register("registrant_city", {required: true})}/>
                        <label htmlFor={"registrantState"}>Estado del registrante</label>
                        <input type="text" id="registrantState" name="registrantState"
                               {...register("registrant_state", {required: true})}/>
                        <label htmlFor={"registrantCountry"}>Pais del registrante:</label>
                        <input type="text" id="registrantCountry" name="registrantCountry"
                               {...register("registrant_country", {required: true})}/>
                        <label htmlFor={"adminName"}>Nombre del administrador:</label>
                        <input type="text" id="adminName" name="adminName"
                               {...register("admin", {required: true})}/>
                        <label htmlFor={"adminCity"}>Ciudad del administrador:</label>
                        <input type="text" id="adminCity" name="adminCity"
                               {...register("admin_city", {required: true})}/>
                        <label htmlFor={"adminCountry"}>Pais del administrador:</label>
                        <input type="text" id="adminCountry" name="adminCountry"
                               {...register("admin_country", {required: true})}/>
                        <label htmlFor={"adminState"}>Estado del administrador:</label>
                        <input type="text" id="adminState" name="adminState"
                               {...register("admin_state", {required: true})}/>
                        <label htmlFor={"techName"}>Nombre de tecnologia:</label>
                        <input type="text" id="techName" name="techName"
                               {...register("tech_name", {required: true})}/>
                        <label htmlFor={"techCity"}>Ciudad de tecnologia:</label>
                        <input type="text" id="techCity" name="techCity"
                               {...register("tech_city", {required: true})}/>
                        <label htmlFor={"techState"}>Estado de tecnologia</label>
                        <input type="text" id="techState" name="techState"
                               {...register("tech_state", {required: true})}/>
                        <label htmlFor={"techCountry"}>Pais de tecnologia</label>
                        <input type="text" id="techCountry" name="techCountry"
                               {...register("tech_country", {required: true})}/>
                        <label htmlFor={"billingName"}>Nombre de facturacion:</label>
                        <input type="text" id="billingName" name="billingName"
                               {...register("biling_name", {required: true})}/>
                        <label htmlFor={"billingCity"}>Ciudad de facturacion:</label>
                        <input type="text" id="billingCity" name="billingCity"
                               {...register("biling_city", {required: true})}/>
                        <label htmlFor={"billingState"}>Estado de facturacion:</label>
                        <input type="text" id="billingState" name="billingState"
                               {...register("biling_state", {required: true})}/>
                        <label htmlFor={"expirationDate"}>Fecha de expiracion:</label>
                        <input type="date" id="expirationDate" name="expirationDate"
                               {...register("expiration_date", {required: true})}/>

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
        console.log(data)
        let addedUSer = await addUser(data)
        console.log(addedUSer)
    })

    return(
        <div>
            <article className="pale_page">
                <h1>REGISTRATE</h1>
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

export function HomePage(){

    return(
        <div className={"Body"}>
            <div className="about">
                <ReactVideoPage/>
                <h3>Acerca de nosotros</h3>
                <p>
                    En TrustMe! estamos dedicados a forjar un mundo en línea más seguro y confiable para individuos y
                    organizaciones. Con un equipo altamente capacitado y apasionado por la seguridad informática, nos
                    enorgullece ofrecer soluciones de vanguardia que protegen los activos digitales de nuestros clientes
                    y preservan su reputación en línea.
                </p>
            </div>
            <div className="ranking">
                <h3>Nuestra Pasión por la Seguridad Cibernética</h3>
                <p>
                    En un entorno digital en constante evolución, la seguridad cibernética se ha convertido en una
                    prioridad crítica. Nuestra pasión por este campo nos motiva a mantenernos a la vanguardia de las
                    amenazas y desafíos en línea. Nuestro equipo de expertos trabaja incansablemente para identificar y
                    abordar las vulnerabilidades de seguridad, brindando así a nuestros clientes la tranquilidad que merecen.
                </p>
            </div>
            <div className="enfoque">
                <h3>Nuestro Enfoque</h3>
                <p>
                    En TrustMe! adoptamos un enfoque integral hacia la seguridad en línea. Ofrecemos una amplia gama de
                    servicios que incluyen pruebas de penetración, evaluación de vulnerabilidades, auditorías de
                    seguridad y consultoría experta. Nuestra misión es no solo resolver problemas de seguridad, sino
                    también educar y empoderar a nuestros clientes para que tomen decisiones informadas en materia de
                    seguridad cibernética.
                </p>
            </div>
            <div className="excelencia">
                <h3>Compromiso con la Excelencia</h3>
                <p>
                    La excelencia es un principio fundamental en nuestro trabajo. Estamos comprometidos con la mejora
                    continua de nuestros servicios y la satisfacción de nuestros clientes. Valoramos la confianza que
                    nuestros clientes depositan en nosotros y nos esforzamos por superar sus expectativas en cada
                    proyecto que emprendemos.
                </p>
            </div>
            <div className="futuro">
                <h3>Nuestra Visión para el Futuro</h3>
                <p>
                    En TrustMe!, nuestra visión es liderar la industria de la seguridad informática y ser reconocidos
                    como un socio confiable en la protección de activos digitales. Esperamos contribuir a un mundo en
                    línea más seguro y colaborativo, donde la seguridad cibernética sea accesible y efectiva para todos.
                </p>
            </div>
            <div className="unete">
                <h3>Únete a Nosotros</h3>
                <p>
                    Te invitamos a unirte a nosotros en esta misión de asegurar un futuro digital más seguro. Juntos,
                    podemos enfrentar los desafíos cibernéticos y fortalecer la seguridad en línea para todos.
                </p>
            </div>
            <div className="mision">
                <h3>Mision</h3>
                <p>
                    Nuestra misión en TrustMe! es proteger la confianza en línea de nuestros clientes al garantizar la
                    integridad y seguridad de sus páginas web. Nos comprometemos a brindar soluciones de seguridad
                    informática líderes en la industria que identifiquen y mitiguen de manera proactiva las
                    vulnerabilidades, protegiendo así a nuestros clientes de amenazas cibernéticas y asegurando que sus
                    activos digitales estén resguardados.
                </p>
            </div>
            <div className="vision">
                <h3>Vision</h3>
                <p>
                    En TrustMe! aspiramos a ser reconocidos como líderes indiscutibles en el ámbito de la seguridad info
                    rmática para páginas web. Buscamos ser la elección predilecta de las empresas y organizaciones que
                    valoran la seguridad cibernética como una prioridad estratégica. Planeamos lograrlo mediante la
                    innovación constante, la excelencia en la prestación de servicios y la construcción de relaciones
                    de confianza a largo plazo con nuestros clientes. Nos esforzamos por ser un referente en la
                    industria, contribuyendo así a un entorno en línea más seguro y protegido para todos.
                </p>
            </div>
        </div>
    )
}

export function ListPages () {
    const [pages, setPages] = useState([]);
    useEffect(() => {
        async function getPages(){
            const allPages = await getAllPages();
            console.log(allPages.data)
            setPages(allPages.data)
        }
        getPages()
    }, []);
    return <div className={"Body"}>
        <h3>Lista de paginas</h3>
        <div className={"scrollable_section"}>
            {pages.map(element_page => (
                // eslint-disable-next-line react/jsx-key
                <div className="webpage_square" >
                    <h3><Link to={"/update-page"}>{element_page.page_name}</Link></h3>
                    <p>Page administrator: {element_page.admin}<br/>Page url: {element_page.url}</p>
                </div>
            ))}
        </div>
    </div>
}

export function DetailPage(){
    const { register, handleSubmit, formState: {
    } } = useForm();
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data=> {
        console.log(data)
        let addedUSer = await addUser(data)
        console.log(addedUSer)
    })
    return (
        <div className={"blue_body"}>
            <article className="pale_page">
                <h2>ACTUALIZA TU PAGINA</h2>
                <section className="scrollable_section">
                    <form onSubmit={onSubmit}>
                        <label htmlFor="pageName">Nombre de la Página:</label>
                        <input type="text" id="pageName" name="pageName"
                               {...register("page_name", {required: true})}/>

                        <label htmlFor="pageUrl">URL de la Página:</label>
                        <input type="url" id="pageUrl" name="pageUrl"
                               {...register("url", {required: true})}/>

                        <label htmlFor={"domainName"}>Nombre de dominio de la Página:</label>
                        <input type="text" id="domainName" name="domainName"
                               {...register("domain_name", {required: true})}/>
                        <label htmlFor={"nameServers"}>Nombre de servidores:</label>
                        <input type="text" id="nameServers" name="nameServers"
                               {...register("name_servers", {required: true})}/>
                        <label htmlFor={"registrant"}>Registrante</label>
                        <input type="text" id="registrant" name="registrant"
                               {...register("registrar", {required: true})}/>
                        <label htmlFor={"registrantName"}>Nombre del registrante:</label>
                        <input type="text" id="registrantName" name="registrantName"
                               {...register("registrant_name", {required: true})}/>
                        <label htmlFor={"registrantCity"}>Ciudad del registrante:</label>
                        <input type="text" id="registrantCity" name="registrantCity"
                               {...register("registrant_city", {required: true})}/>
                        <label htmlFor={"registrantState"}>Estado del registrante</label>
                        <input type="text" id="registrantState" name="registrantState"
                               {...register("registrant_state", {required: true})}/>
                        <label htmlFor={"registrantCountry"}>Pais del registrante:</label>
                        <input type="text" id="registrantCountry" name="registrantCountry"
                               {...register("registrant_country", {required: true})}/>
                        <label htmlFor={"adminName"}>Nombre del administrador:</label>
                        <input type="text" id="adminName" name="adminName"
                               {...register("admin", {required: true})}/>
                        <label htmlFor={"adminCity"}>Ciudad del administrador:</label>
                        <input type="text" id="adminCity" name="adminCity"
                               {...register("admin_city", {required: true})}/>
                        <label htmlFor={"adminCountry"}>Pais del administrador:</label>
                        <input type="text" id="adminCountry" name="adminCountry"
                               {...register("admin_country", {required: true})}/>
                        <label htmlFor={"adminState"}>Estado del administrador:</label>
                        <input type="text" id="adminState" name="adminState"
                               {...register("admin_state", {required: true})}/>
                        <label htmlFor={"techName"}>Nombre de tecnologia:</label>
                        <input type="text" id="techName" name="techName"
                               {...register("tech_name", {required: true})}/>
                        <label htmlFor={"techCity"}>Ciudad de tecnologia:</label>
                        <input type="text" id="techCity" name="techCity"
                               {...register("tech_city", {required: true})}/>
                        <label htmlFor={"techState"}>Estado de tecnologia</label>
                        <input type="text" id="techState" name="techState"
                               {...register("tech_state", {required: true})}/>
                        <label htmlFor={"techCountry"}>Pais de tecnologia</label>
                        <input type="text" id="techCountry" name="techCountry"
                               {...register("tech_country", {required: true})}/>
                        <label htmlFor={"billingName"}>Nombre de facturacion:</label>
                        <input type="text" id="billingName" name="billingName"
                               {...register("biling_name", {required: true})}/>
                        <label htmlFor={"billingCity"}>Ciudad de facturacion:</label>
                        <input type="text" id="billingCity" name="billingCity"
                               {...register("biling_city", {required: true})}/>
                        <label htmlFor={"billingState"}>Estado de facturacion:</label>
                        <input type="text" id="billingState" name="billingState"
                               {...register("biling_state", {required: true})}/>
                        <label htmlFor={"expirationDate"}>Fecha de expiracion:</label>
                        <input type="date" id="expirationDate" name="expirationDate"
                               {...register("expiration_date", {required: true})}/>

                        <button>Enviar</button>
                    </form>
                </section>
            </article>
        </div>
    )
}

export function RegisterOpinion() {
    return(
        <div>

            <h1>Publicar Texto</h1>
            <form className="rating">
                <label htmlFor="texto">Ingresa tu texto:</label>
                <textarea id="texto" name="texto" rows="4" cols="50" required></textarea><br/><br/><br/>
                <div>
                    <label>
                        <input type="radio" name="stars" value="1" />
                        <span className="icon">★</span>
                    </label>
                    <label>
                        <input type="radio" name="stars" value="2" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                    </label>
                    <label>
                        <input type="radio" name="stars" value="3" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                    </label>
                    <label>
                        <input type="radio" name="stars" value="4" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                    </label>
                    <label>
                        <input type="radio" name="stars" value="5" />
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                        <span className="icon">★</span>
                    </label>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

