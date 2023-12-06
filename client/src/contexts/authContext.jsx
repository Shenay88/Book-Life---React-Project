import { createContext} from "react";
import { useNavigate } from "react-router-dom";

import { loginUser, registerUser } from "../services/authService";

import Path from "../paths";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    // Here we will store the authentication data, the data that the server will return when we login.

    const navigate = useNavigate()

    // we pass a function to make sure localStorage is cleared. A problem that occurs when we keep information in two places and they don't always work synchronously.
    // usePersistedState (постоянно състояние) -> our own useState
    const [user, setUser] = usePersistedState('user', {})

    const loginSubmitHandler = async ({ email, password }) => {

        try {

            const userResult = await loginUser(email, password) // an object contains accessToken, username, email, _id

            setUser(userResult);

            localStorage.setItem('accessToken', userResult.accessToken);

            navigate(Path.Home);

        } catch (error) {
            alert(error.message)
        }


    }

    const registerSubmitHandler = async ({ username, email, password }) => {

        try {

            const newUserResult = await registerUser(username, email, password); // an object contains accesToken, username, email, password, _createdOn, _id

            setUser(newUserResult);

            localStorage.setItem('accessToken', newUserResult.accessToken);

            navigate(Path.Home);

        } catch (error) {

            alert(error.message);

        }
    }

    const logoutHandler = () => {

        localStorage.removeItem('accessToken')
        setUser({});

    }

    const userValues = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        email: user.email,
        id: user._id,
        isUser: !!user.accessToken
    }

    /*
    Component that return AuthContext.Provider(it helped us access the context through the different parts of the DOM). 
    AuthProvider childrens. AuthProvider is like wrapper.
    Children is a required property that every component has. We can't figure it out. Children has it by default (props.children). Childrens are automatically anything that comes between the opening and closing tags.
    */

    return (
        <AuthContext.Provider value={userValues}>
            {children}
        </AuthContext.Provider>
    );
}

AuthContext.displayName = 'AuthContext';

export default AuthContext;