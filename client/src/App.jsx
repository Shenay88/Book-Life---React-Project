import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

import './app.css';

import Catalog from "./components/catalog/Catalog";
import Create from "./components/create/Create";
import Details from "./components/details/Details";
import Login from "./components/login/Login"; 
import Navigation from "./components/navigation/Navigation";
import Pagination from "./components/catalog/pagination/Pagination";
import Register from "./components/register/Register";
import AuthContext from "./contexts/AuthContext";
import { loginUser } from "./services/authService";
import Path from "./paths";

function App() {

  // It is not right to be here, because it is not good to have logic in the App.jsx.
  // Here we will store the authentication data, the data that the server will return when we login.
  
  const navigate = useNavigate()
  const [user, setUser] = useState({});

  const loginSubmitHandler = async(values) => {

    const userResult = await loginUser(values) // an object with _id and accessToken
    setUser(userResult);
    navigate(Path.Home);
  }

  const userValues = {
    loginSubmitHandler,
    email: user.email,
    id: user._id,
    isUser: !!user.email
  }

  return (
    <AuthContext.Provider value = {userValues}>
      <Navigation />

      <Routes >
        <Route path={Path.Home} element={<Catalog />}>
          <Route path="books" element={<Pagination />} />
        </Route>
        <Route path="/addBook" element={<Create />} />
        <Route path={Path.Login} element={<Login />} />
        <Route path={Path.Register} element={<Register />} />
        <Route path="/books/details/:bookId" element={<Details />} />
      </Routes>

    </AuthContext.Provider>
  )
}

export default App
