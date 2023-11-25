import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Catalog from "./components/catalog/Catalog";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Create from "./components/create/Create";
import './app.css'

function App() {


  return (
    <>
      <Navigation />

      <Routes >
        <Route path="/" element={<Catalog />} />
        <Route path="/addBook" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      
    </>
  )
}

export default App
