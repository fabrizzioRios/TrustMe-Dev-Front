import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import {
    HomePage,
    LoginPageTemplate, LogoutPageTemplate
} from "./blocks/general_page_components.jsx"

import {
    RegisterUserTemplate, ListUsers, DetailUser
} from "./blocks/user_components.jsx"

import {
    RegisterPageTemplate, ListPages, DetailPage, UserPages
} from "./blocks/page_components.jsx"

import {
    RegisterOpinion
} from "./blocks/opinion_components.jsx"


import { Navigation } from "./navigation/Navigations.jsx";
import "./css/style.css"
import {useEffect, useState} from "react";

function App() {
    const [items, setItems] = useState({data: {success: false}});

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            setItems(userData);
        }
    }, []);
    if (items && items.data) {
        if (items.data.message) {
            return (
                <BrowserRouter>
                    <Navigation/>
                    <Routes>
                        <Route path={"/"} element={< Navigate to={"/home"}/>}/>
                        {/*Home url*/}
                        <Route path={"/home"} element={< HomePage/>}/>

                        {/*Session urls*/}
                        <Route path={"/login"} element={< LoginPageTemplate/>}/>
                        <Route path={"/logout"} element={< LogoutPageTemplate/>}/>

                        {/*User urls*/}
                        <Route path={"/register-user"} element={< RegisterUserTemplate/>}/>
                        <Route path={"/list-user"} element={< ListUsers/>}/>
                        <Route path={"/detail-user"} element={< DetailUser/>}/>

                        {/*Page urls*/}
                        <Route path={"/register-page"} element={< RegisterPageTemplate/>}/>
                        <Route path={"/list-page"} element={< ListPages/>}/>
                        <Route path={"/detail-page"} element={< DetailPage />}/>
                        <Route path={"/my-pages"} element={< UserPages />}/>


                        {/*Opinion urls*/}
                        <Route path={"/register-opinion"} element={< RegisterOpinion/>}/>

                    </Routes>
                </BrowserRouter>
            )
        } else {
            return (
                <BrowserRouter>
                    <Navigation/>
                    <Routes>
                        <Route path={"/"} element={< Navigate to={"/home"}/>}/>
                        {/*Home url*/}
                        <Route path={"/home"} element={< HomePage/>}/>

                        {/*Session urls*/}
                        <Route path={"/login"} element={< LoginPageTemplate/>}/>
                        <Route path={"/logout"} element={< LogoutPageTemplate/>}/>

                        {/*User urls*/}
                        <Route path={"/register-user"} element={< RegisterUserTemplate/>}/>
                        <Route path={"/detail-user"} element={< DetailUser/>}/>

                        {/*Page urls*/}
                        <Route path={"/register-page"} element={< RegisterPageTemplate/>}/>
                        <Route path={"/list-page"} element={< ListPages/>}/>
                        <Route path={"/detail-page"} element={< DetailPage/>}/>

                        {/*Opinion urls*/}
                        <Route path={"/register-opinion"} element={< RegisterOpinion/>}/>

                    </Routes>
                </BrowserRouter>
            )
        }
    } else {
        return (
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path={"/"} element={< Navigate to={"/home"}/>}/>
                    {/*Home url*/}
                    <Route path={"/home"} element={< HomePage/>}/>

                    {/*Session urls*/}
                    <Route path={"/login"} element={< LoginPageTemplate/>}/>
                    <Route path={"/logout"} element={< LogoutPageTemplate/>}/>

                    {/*User urls*/}
                    <Route path={"/register-user"} element={< RegisterUserTemplate/>}/>

                    {/*Page urls*/}
                    <Route path={"/list-page"} element={< ListPages/>}/>
                    <Route path={"/detail-page"} element={< DetailPage/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App

