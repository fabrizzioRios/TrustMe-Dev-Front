
import {useNavigate,} from "react-router-dom";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {deletePage, getPage, updatePage} from "/src/api_axios/page_axios.js";
// import {getUser} from "../api_axios/user_axios.js";

export function DetailPage(){
    const [items, setItems] = useState({data: {success: false}});
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = JSON.parse(localStorage.getItem('user_id'));
    const is_admin = JSON.parse(localStorage.getItem('is_admin'));
    const storedPageId = JSON.parse(localStorage.getItem('page_id'));

    const [page_data, setPageData] = useState([]);
    const [updated_data, dataPageUpd] = useState([]);
    const navigate = useNavigate()
    const { setValue, register, handleSubmit} = useForm();

    useEffect(() => {
        if (userData){
            setItems(userData);
            getPageData()
            if (location.pathname){
                localStorage.setItem('page_id', JSON.stringify(0));
            }
        } else {
            navigate("/page-list/"+ storedPageId +"/opinions")
        }
        async function getPageData(){
            const dataFromPage = await getPage(storedPageId);
            if (userId === dataFromPage.data.created_by){
                setValue('page_name', dataFromPage.data.page_name)
                setValue('url', dataFromPage.data.url)
                setValue('domain_name', dataFromPage.data.domain_name)
                setValue('name_servers', dataFromPage.data.name_servers)
                setValue('registrar', dataFromPage.data.registrar)
                setValue('registrant_name', dataFromPage.data.registrant_name)
                setValue('registrant_city', dataFromPage.data.registrant_city)
                setValue('registrant_state', dataFromPage.data.registrant_state)
                setValue('registrant_country', dataFromPage.data.registrant_country)
                setValue('admin', dataFromPage.data.admin)
                setValue('admin_city', dataFromPage.data.admin_city)
                setValue('admin_country', dataFromPage.data.admin_country)
                setValue('admin_state', dataFromPage.data.admin_state)
                setValue('tech_name', dataFromPage.data.tech_name)
                setValue('tech_city', dataFromPage.data.tech_city)
                setValue('tech_state', dataFromPage.data.tech_state)
                setValue('tech_country', dataFromPage.data.tech_country)
                setValue('biling_name', dataFromPage.data.biling_name)
                setValue('biling_city', dataFromPage.data.biling_city)
                setValue('biling_state', dataFromPage.data.biling_state)
                setValue('domain_name', dataFromPage.data.domain_name)
                setValue('expiration_date', dataFromPage.data.expiration_date)
                setValue('expiration_date', dataFromPage.data.expiration_date)
                setPageData(dataFromPage.data)
            } else {
                const id_page = dataFromPage.data.id
                localStorage.setItem('page_id', JSON.stringify(id_page));
                navigate("/page-list/"+ id_page +"/opinions")
            }
        }
    }, []);

    const onSubmit = handleSubmit(async submitedPageData=> {
        const storedPageId = JSON.parse(localStorage.getItem('pageData'));
        async function updatePageData(){
            const dataPage = await updatePage(storedPageId, submitedPageData);
            if(dataPage){
                console.log(dataPage)
                deletePageStoredData()
            }
        }
        updatePageData()
    })

    const handleDelete = async () => {
        const storedPageId = JSON.parse(localStorage.getItem('pageData'));
        if (storedPageId) {
            const deletedPage = await deletePage(storedPageId);
            if (deletedPage) {
                deletePageStoredData();
            }
        }
    };
    function deletePageStoredData(){
        localStorage.setItem('page_id', JSON.stringify(0));
        navigate('/list-page')
    }
    return (
        <div className={"blue-body"}>
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

                        <button type={"submit"}>Enviar</button>
                        <button type={"button"} onClick={handleDelete}>Eliminar</button>
                    </form>
                </section>
            </article>
        </div>
    )
}