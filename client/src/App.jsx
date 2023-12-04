import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

import './app.css';
import Path from "./paths";
import { loginUser, registerUser } from "./services/authService";

import Catalog from "./components/catalog/Catalog";
import Create from "./components/create/Create";
import Details from "./components/details/Details";
import Login from "./components/login/Login";
import Navigation from "./components/navigation/Navigation";
import Pagination from "./components/catalog/pagination/Pagination";
import Register from "./components/register/Register";
import AuthContext from "./contexts/AuthContext";
import Logout from "./components/logout/Logout";

function App() {

  // It is not right to be here, because it is not good to have logic in the App.jsx.
  // Here we will store the authentication data, the data that the server will return when we login.

  const navigate = useNavigate()

  // we pass a function to make sure localStorage is cleared. A problem that occurs when we keep information in two places and they don't always work synchronously.
  const [user, setUser] = useState(() => {
    localStorage.removeItem('accessToken');

    return {};
  });

  const loginSubmitHandler = async ({email, password}) => {

    try {

      const userResult = await loginUser(email, password) // an object contains accessToken, username, email, _id

      setUser(userResult);

      localStorage.setItem('accessToken', userResult.accessToken);

      navigate(Path.Home);
      
    } catch (error) {
      alert(error.message)
    }

 
  }

  const registerSubmitHandler = async ({username, email, password}) => {

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

  return (
    <AuthContext.Provider value={userValues}>
      <Navigation />

      <Routes >
        <Route path={Path.Home} element={<Catalog />}>
          <Route path="books" element={<Pagination />} />
        </Route>
        <Route path="/addBook" element={<Create />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Register} element={<Register />} />
        <Route path="/books/details/:bookId" element={<Details />} />
        <Route path={Path.Logout} element={<Logout />} />
      </Routes>

    </AuthContext.Provider>
  )
}

export default App
