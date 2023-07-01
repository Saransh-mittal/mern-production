//import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { useContext } from "react";
import { userContext } from "../App";
//import "bootstrap/dist/css/bootstrap.css";
const Navbar = () => {
  const {state,dispatch} = useContext(userContext);

  const RenderMenu = () =>{
    if(state)
    {
      return (
        <><li className="nav-item">
        <NavLink className="nav-link"to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li>
      </>
      );
    }
    else
    {
      return (
        <><li className="nav-item">
        <NavLink className="nav-link"to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>

        <li className="nav-item">
        <NavLink className="nav-link" to="/signin">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">Register</NavLink>
      </li></>
      );
    }
  }
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand ms-lg-5" to="/"><img className="logo" src={Logo} alt="logo" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me-lg-5" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
        <RenderMenu/>
      </ul>
    </div>
  </div>
</nav> 
  );
}

export default Navbar;
