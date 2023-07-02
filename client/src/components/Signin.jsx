import { NavLink, useNavigate } from "react-router-dom";
import Login from "../images/login.png";
import { useContext, useState } from "react";
import { userContext } from "../App";
const Signin = () => {

  const {state,dispatch} = useContext(userContext);

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const inputHandler = async(e) => {
    e.preventDefault();

    const res = await fetch("https://mern-deployement.onrender.com/api/login",{
      method:"POST",
      headers:{
       "Content-Type":"application/json"
      },
      body: JSON.stringify({email,password})
    })

    const info = await res.json();

    if(info.error || !info)
    {
      alert(`${info.error}`);
      console.log(`${info.error}`);
      return;
    }
    dispatch({type:"USER",payload:true});
    window.alert(`Sign-In Successfull`);
    console.log(`Sign-In Successfull`);
    navigate("/");
  };
  return (
    <section id="signin">
      <div className="container">
        <h1 className="heading"> LogIn </h1>
        <div className="row mt-5">
          <div className="col-10 col-lg-5 order-1 order-lg-0 mx-auto d-flex justify-content-center align-items-center">
            <form method="POST" className="d-flex flex-column">
              <div className="mb-5 row underline-input">
                <i className="bi bi-envelope-fill col-1"></i>
                <input
                  name = "email"
                  onChange = {(e)=> setEmail(e.target.value)}
                  value = {email}
                  type="email"
                  placeholder="Email address"
                  className="form-control form-underlined col"
                />
              </div>
              <div className="mb-5 row underline-input">
                <i className="bi bi-lock-fill col-1"></i>
                <input
                  name = "password"
                  onChange = {(e)=> setPassword(e.target.value)}
                  value = {password}
                  type="password"
                  placeholder="Password"
                  className="form-control form-underlined col"
                />
              </div>
              <div className="row">
                <button type="submit" onClick={inputHandler} className="btn btn-primary submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-5 order-0 order-lg-2 col-10 mx-auto d-flex flex-column justify-content-center align-items-center">
            <img className="img-fluid" src={Login} alt="register image" />
            <NavLink to="/register"><button type="button" className="btn mt-5">
              Create an Account
            </button></NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
