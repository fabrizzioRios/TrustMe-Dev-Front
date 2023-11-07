import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function LogoutUser() {
    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            localStorage.removeItem('userData');
            localStorage.removeItem('user_id');
            localStorage.removeItem('is_admin');
            localStorage.removeItem('page_id');
        }
        window.location.reload(true);
        navigate('/home');
    }, [navigate]);

    return null;
}