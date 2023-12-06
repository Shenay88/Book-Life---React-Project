import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export function AuthGuard () {

    const {isUser} = useContext(AuthContext);

    if(!isUser) {
        return <Navigate to={'/404'}/>
    }

    return <Outlet />
}

export function GuestGuard () {

    const {isUser} = useContext(AuthContext);

    if(isUser) {
        return <Navigate to={'/404'}/>
    }

    return <Outlet />
}

