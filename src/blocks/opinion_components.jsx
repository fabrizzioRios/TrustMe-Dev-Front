// import {Logo.png} from "trust_me/src/media/img;
// import "trust_me/src/media/vid/TrustME2.mp4;
// import {Link, useNavigate} from "react-router-dom";
// import {useEffect, useState} from "react";
// import {addUser} from "../api_axios/user_axios.js";
// import {useForm} from "react-hook-form";
// import {addPage, getAllPages} from "../api_axios/page_axios.js";
// import {makeLogin} from "../api_axios/tools.js";
// import {useEffect, useState} from "react";
// import {ReactVideoPage} from "./tools_components.jsx";

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