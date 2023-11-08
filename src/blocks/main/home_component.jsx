import {ReactVideoPage} from "../tools/video_home_component.jsx";


export function HomePage(){
    return(
        <div className={"Body"}>
            <ReactVideoPage/>
            <div class="tabs">
        <input type="radio" class="tabs_radio" name="company_info" id="about" defaultChecked="True"/>
        <label htmlFor="about" class="tabs_label">| Acerca de Nosotros |</label>
        <div class="tabs_content">
            En TrustMe! estamos dedicados a forjar un mundo en línea más seguro y confiable para individuos 
            y organizaciones. Con un equipo altamente capacitado y apasionado por la seguridad informática, 
            nos enorgullece ofrecer soluciones de vanguardia que protegen los activos digitales de nuestros 
            clientes y preservan su reputación en línea.
        </div>

        <input type="radio" class="tabs_radio" name="company_info" id="passion"/>
        <label htmlFor="passion" class="tabs_label">| Nuestra Pasión por la Seguridad Cibernética |</label>
        <div class="tabs_content">
            En un entorno digital en constante evolución, la seguridad cibernética se ha convertido en una 
            prioridad crítica. Nuestra pasión por este campo nos motiva a mantenernos a la vanguardia de las 
            amenazas y desafíos en línea. Nuestro equipo de expertos trabaja incansablemente para identificar 
            y abordar las vulnerabilidades de seguridad, brindando así a nuestros clientes la tranquilidad que 
            merecen.
        </div>

        <input type="radio" class="tabs_radio" name="company_info" id="focus"/>
        <label htmlFor="focus" class="tabs_label">| Nuestro Enfoque |</label>
        <div class="tabs_content">
            En TrustMe! adoptamos un enfoque integral hacia la seguridad en línea. Ofrecemos una amplia gama 
            de servicios que incluyen pruebas de penetración, evaluación de vulnerabilidades, auditorías de 
            seguridad y consultoría experta. Nuestra misión es no solo resolver problemas de seguridad, sino 
            también educar y empoderar a nuestros clientes para que tomen decisiones informadas en materia de 
            seguridad cibernética.
        </div>

        <input type="radio" class="tabs_radio" name="company_info" id="commitment"/>
        <label htmlFor="commitment" class="tabs_label">| Compromiso con la Excelencia |</label>
        <div class="tabs_content">
            La excelencia es un principio fundamental en nuestro trabajo. Estamos comprometidos con la mejora 
            continua de nuestros servicios y la satisfacción de nuestros clientes. Valoramos la confianza que 
            nuestros clientes depositan en nosotros y nos esforzamos por superar sus expectativas en cada 
            proyecto que emprendemos.
        </div>

        <input type="radio" class="tabs_radio" name="company_info" id="future"/>
        <label htmlFor="future" class="tabs_label">| Nuestra Visión para el Futuro |</label>
        <div class="tabs_content">
            En TrustMe!, nuestra visión es liderar la industria de la seguridad informática y ser reconocidos 
            como un socio confiable en la protección de activos digitales. Esperamos contribuir a un mundo 
            en línea más seguro y colaborativo, donde la seguridad cibernética sea accesible y efectiva 
            para todos.
        </div>

        <input type="radio" class="tabs_radio" name="company_info" id="join"/>
        <label htmlFor="join" class="tabs_label">| Únete a Nosotros |</label>
        <div class="tabs_content">
            Te invitamos a unirte a nosotros en esta misión de asegurar un futuro digital más seguro. Juntos, 
            podemos enfrentar los desafíos cibernéticos y fortalecer la seguridad en línea para todos.
        </div>

        <input type="radio" class="tabs_radio" name="company_info" id="mision"/>
        <label htmlFor="mision" class="tabs_label">| Misión |</label>
        <div class="tabs_content">
            Nuestra misión en TrustMe! es proteger la confianza en línea de nuestros clientes al garantizar 
            la integridad y seguridad de sus páginas web. Nos comprometemos a brindar soluciones de seguridad 
            informática líderes en la industria que identifiquen y mitiguen de manera proactiva las 
            vulnerabilidades, protegiendo así a nuestros clientes de amenazas cibernéticas y asegurando que 
            sus activos digitales estén resguardados.
        </div>

        <input type="radio" class="tabs_radio" name="company_info" id="vision"/>
        <label htmlFor="vision" class="tabs_label">| Visión |</label>
        <div class="tabs_content">
            En TrustMe! aspiramos a ser reconocidos como líderes indiscutibles en el ámbito de la 
            seguridad informática para páginas web. Buscamos ser la elección predilecta de las empresas 
            y organizaciones que valoran la seguridad cibernética como una prioridad estratégica. Planeamos 
            lograrlo mediante la innovación constante, la excelencia en la prestación de servicios y la 
            construcción de relaciones de confianza a largo plazo con nuestros clientes. Nos esforzamos por 
            ser un referente en la industria, contribuyendo así a un entorno en línea más seguro y protegido 
            para todos.
        </div>
        </div>
        <footer>

        </footer>
        </div>
    )
}
