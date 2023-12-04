import { useContext, useEffect } from "react";
import { logoutUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import Path from "../../paths";
import AuthContext from "../../contexts/AuthContext";

export default function Logout() {

    const navigate = useNavigate()
    const { logoutHandler } = useContext(AuthContext)

    useEffect(() => {
        logoutUser()
            .then(() => {
                logoutHandler();
                navigate(Path.Home);
            })
            .catch(() => navigate(Path.Home));
    }, []);

    return null;
}