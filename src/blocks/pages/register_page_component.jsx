import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {getUser} from "../../api_axios/user_axios.js";
import {addPage} from "../../api_axios/page_axios.js";
import {makeLogin} from "../../api_axios/tools.js";

export function RegisterPageTemplate(){
    const [items, setItems] = useState({data: {success: false}});
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = JSON.parse(localStorage.getItem('user_id'));
    const is_admin = JSON.parse(localStorage.getItem('is_admin'));

    const navigate = useNavigate()

    useEffect(() => {
        if (userData) {
            setItems(userData);
        }
    }, []);

    const { register, handleSubmit, formState: {
    } } = useForm();

    const onSubmit = handleSubmit(async data=> {
        data['created_by'] = userId
        if (userData){
            const createdPage = await addPage(data);
            if (createdPage){
                const getData = await getUser(userId)
                console.log(getData)
                const user_data_log = {
                    "email": getData.data.email,
                    "password": getData.data.password
                }
                const updatedUser = await makeLogin(user_data_log);
                if (updatedUser){
                    localStorage.setItem('userData', JSON.stringify(updatedUser));
                    navigate("/page-list")
                }
            }
        }
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
                        <input type="hidden" id="created_by" name="created_by" {...register("created_by")}/>
                        <button>Enviar</button>
                    </form>
                </section>
            </article>
        </div>
    )
}