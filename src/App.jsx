import Login from "./components/login/Login";
import Catalog from "./components/catalog/Catalog";
import Navigation from "./components/navigation/Navigation";
import Register from "./components/register/Register";
import './app.css'

function App() {


  return (
    <>
      <Navigation />
      <Login />
      <Register />
      <Catalog /> 
    </>
  )
}

export default App
