import { Route, Routes } from "react-router-dom";

import './app.css';
import Path from "./paths";
import { AuthProvider } from "./contexts/authContext";

import Catalog from "./components/catalog/Catalog";
import Create from "./components/create/Create";
import Details from "./components/details/Details";
import Login from "./components/login/Login";
import Navigation from "./components/navigation/Navigation";
import Pagination from "./components/catalog/pagination/Pagination";
import Register from "./components/register/Register";
import Logout from "./components/logout/Logout";

function App() {

  return (
    <AuthProvider >
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

    </AuthProvider>
  )
}

export default App
