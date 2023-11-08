import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";

import { Navigation } from "./navigation/Navigations.jsx";
import "./css/style.css"
import {useEffect, useState} from "react";
import {HomePage} from "./blocks/main/home_component.jsx";
import {RegisterUserTemplate} from "./blocks/users/register_user_component.jsx";
import {RegisterPageTemplate} from "./blocks/pages/register_page_component.jsx";
import {ListUsers} from "./blocks/users/list_user_component.jsx";
import {DetailUser} from "./blocks/users/detail_user_component.jsx";
import {ListPages} from "./blocks/pages/list_page_component.jsx";
import {DetailPage} from "./blocks/pages/detail_page_component.jsx";
import {LoginUser} from "./blocks/main/login_component.jsx";
import {LogoutUser} from "./blocks/main/logout_component.jsx";
import {RegisterOpinion} from "./blocks/opinions/register_opinion_component.jsx";
import {OpinionListPage} from "./blocks/pages/opinion_list_page_component.jsx";
import {UserProfile} from "./blocks/users/profile_user_component.jsx";
import {UserProfileDetail} from "./blocks/users/profile_detail_user_component.jsx";
import {UserPagesList} from "./blocks/pages/user_pages_list_component.jsx";
import {OpinionList} from "./blocks/opinions/list_opinion_component.jsx";


function App() {
    const [items, setItems] = useState({data: {success: false}});
    const userData = JSON.parse(localStorage.getItem('userData'));
    const userId = JSON.parse(localStorage.getItem('user_id'));
    const is_admin = JSON.parse(localStorage.getItem('is_admin'));

    useEffect(() => {
        if (userData) {
            setItems(userData);
        }
    }, []);
    console.log()

    if (userData) {
        if (is_admin){
            // SUPER USER ROUTES =============================================================
            // ===============================================================================
            return (
                <BrowserRouter>
                    <Navigation/>
                    <Routes>
                        <Route path={"/"} element={< Navigate to={"/home"}/>}/>
                        {/*Home url*/}
                        <Route path={"/home"} element={< HomePage/>}/>

                        {/*Session urls*/}
                        <Route path={"/logout"} element={< LogoutUser/>}/>

                        {/*User urls*/}
                        <Route path={"/register-user"} element={< RegisterUserTemplate/>}/>
                        <Route path={"/register-page"} element={< RegisterPageTemplate/>}/>
                        <Route path={"/my-profile"} element={< UserProfile/>}/>

                        <Route path={"/user-list"} element={< ListUsers/>}/>
                        <Route path={"/user/:user_id/detail"} element={< DetailUser/>}/>
                        {/*<Route path={"/user-list/:user_id/opinions"} element={< OpinionsUser/>}/>*/}


                        <Route path={"/opinions-list"} element={< OpinionList/>}/>
                        <Route path={"/page-list"} element={< ListPages/>}/>
                        <Route path={"/page-list/:page_id/detail"} element={< DetailPage/>}/>
                        <Route path={"/page-list/:page_id/opinions"} element={< OpinionList/>}/>
                        <Route path={"/page-list/:page_id/:opinion_id/detail"} element={< RegisterOpinion/>}/>
                        <Route path={"/page-list/:page_id/add-opinion"} element={< RegisterOpinion/>}/>

                    </Routes>
                </BrowserRouter>
            )
        } else {
            // NORMAL USER ROUTES ============================================================
            // ===============================================================================
            return (
                <BrowserRouter>
                    <Navigation/>
                    <Routes>
                        <Route path={"/"} element={< Navigate to={"/home"}/>}/>
                        <Route path={"/home"} element={< HomePage/>}/>

                        <Route path={"/logout"} element={< LogoutUser/>}/>

                        <Route path={"/my-profile"} element={< UserProfile/>}/>
                        <Route path={"/user/:user_id/detail"} element={< DetailUser/>}/>

                        <Route path={"/my-pages"} element={< ListPages/>}/>
                        <Route path={"/my-opinions"} element={< OpinionList/>}/>
                        {/*<Route path={"/my-pages/:page_id/detail"} element={< UserPagesDetail/>}/>*/}
                        {/*<Route path={"/my-pages/:page_id/opinions"} element={< UserPagesOpinions/>}/>*/}

                        <Route path={"/register-page"} element={< RegisterPageTemplate/>}/>

                        <Route path={"/page-list"} element={< ListPages/>}/>
                        <Route path={"/page-list/:page_id/detail"} element={< DetailPage/>}/>
                        <Route path={"/page-list/:page_id/opinions"} element={< OpinionList/>}/>
                        <Route path={"/page-list/:page_id/add-opinion"} element={< RegisterOpinion/>}/>

                        {/*<Route path={"/reg"} element={< RegisterOpinion/>}/>*/}

                    </Routes>
                </BrowserRouter>
            )
        }
    } else {
        // NON USER ROUTES ===============================================================
        // ===============================================================================
        return (
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path={"/"} element={< Navigate to={"/home"}/>}/>

                    <Route path={"/home"} element={< HomePage/>}/>

                    <Route path={"/login"} element={< LoginUser/>}/>

                    <Route path={"/register-user"} element={< RegisterUserTemplate/>}/>

                    <Route path={"/page-list"} element={< ListPages/>}/>
                    <Route path={"/page-list/:page_id/opinions"} element={< OpinionList/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}

export default App

