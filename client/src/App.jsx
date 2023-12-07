import { Route, Routes } from "react-router-dom";

import './app.css';
import Path from "./paths";
import { AuthProvider } from "./contexts/authContext";

import Catalog from "./components/catalog/Catalog";
import Details from "./components/details/Details";
import Login from "./components/login/Login";
import Navigation from "./components/navigation/Navigation";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";
import Edit from "./components/edit/Edit";
import Create from "./components/create/Create";
import Home from "./components/home/Home";
import Page404 from "./components/page-404/Page404";
import { AuthGuard, GuestGuard } from "./components/guards/AuthGuard";

function App() {

  return (
    <AuthProvider >
      <Navigation />

      <Routes >

        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.Catalog} element={<Catalog />}/>
        <Route path={Path.BookDetails} element={<Details />} />
        <Route path='*' element={<Page404 />} />


        <Route element={<AuthGuard />}>

          <Route path={Path.AddBook} element={<Create />} />
          <Route path={Path.EditBook} element={<Edit />} />
          <Route path={Path.Logout} element={<Logout />} />
        </Route>


        <Route element={<GuestGuard />}>
          <Route path={Path.Login} element={<Login />} />
          <Route path={Path.Register} element={<Register />} />
        </Route>
      </Routes>

    </AuthProvider>
  )
}

export default App
