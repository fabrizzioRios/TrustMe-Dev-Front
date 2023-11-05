import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {
    LoginPageTemplate,
    RegisterPageTemplate,
    RegisterUserTemplate,
    HomePage, ListPages, DetailPage, RegisterOpinion,

} from "./blocks/page-components.jsx";
import { Navigation } from "./navigation/Navigations.jsx";
import "./css/style.css"


function App() {

    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path={"/"} element={< Navigate to={"/home"}/>}/>
                <Route path={"/login"} element={< LoginPageTemplate />}/>
                <Route path={"/register-user"} element={< RegisterUserTemplate />}/>
                {/*<Route path={"/list-user"} element={< UserListTemplate />}/>*/}
                <Route path={"/register-page"} element={< RegisterPageTemplate />}/>
                <Route path={"/register-opinion"} element={< RegisterOpinion />}/>
                <Route path={"/list-page"} element={< ListPages />}/>
                <Route path={"/detail-page"} element={< DetailPage />}/>
                <Route path={"/home"} element={< HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
