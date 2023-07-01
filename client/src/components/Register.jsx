import "bootstrap-icons/font/bootstrap-icons.css";
import Reg from "../images/reg.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Register = () => {
  const [data,setData] = useState({name:"",email:"",phone:"",work:"",password:"",cpassword:""});
  const history = useNavigate();
  let name, value;
  const inputEvent = (e) =>{
    name = e.target.name;
    value = e.target.value;

    setData({...data,[name]:value});
  }

  const postData = async(e) =>{
    e.preventDefault();
    const {name,email,phone,work,password,cpassword} = data;
    
    const res = await fetch("/api/signup",{
      method:"POST",
      headers:{
       "Content-Type":"application/json"
      },
      body: JSON.stringify({name,email,phone,work,password,cpassword})
    });

    const info = await res.json();
    if(info.error || !info)
    {
      alert(`${info.error}`);
      console.log(`${info.error}`);
      return;
    }
    else 
    {
      window.alert(`successfull registration`);
      console.log(`successfull registration`);
      history("/signin");
    }
  }

  return (
    <section id="registeration">
      <div className="container">
      <h1 className="heading"> Register </h1>
            <div className="row mt-5">
              <div className="col-10 col-lg-5 order-1 order-lg-0 mx-auto">
                <form method="POST" className="d-flex flex-column">
                <div className="mb-5 row underline-input">
                <i className="bi bi-person-fill col-1"></i>
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      onChange={inputEvent}
                      value={data.name}
                      placeholder="Name"
                      className="form-control form-underlined col"
                    />
                  </div>
                  <div className="mb-5 row underline-input">
                  <i className="bi bi-envelope-fill col-1"></i>
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      onChange={inputEvent}
                      value={data.email}
                      placeholder="Email address"
                      className="form-control form-underlined col"
                    />
                    </div>
                    <div className="mb-5 row underline-input">
                    <i className="bi bi-telephone-fill col-1"></i>
                    <input
                      type="number"
                      name="phone"
                      autoComplete="off"
                      onChange={inputEvent}
                      value={data.phone}
                      placeholder="Phone no."
                      className="form-control form-underlined col"
                    />
                    </div>
                    <div className="mb-5 row underline-input">
                    <i className="bi bi-person-workspace col-1"></i>
                    <input
                      type="text"
                      name="work"
                      autoComplete="off"
                      onChange={inputEvent}
                      value={data.work}
                      placeholder="Your Profession"
                      className="form-control form-underlined col"
                    />
                    </div>
                    <div className="mb-5 row underline-input">
                    <i className="bi bi-lock-fill col-1"></i>
                    <input
                      type="password"
                      name="password"
                      autoComplete="off"
                      onChange={inputEvent}
                      value={data.password}
                      placeholder="Password"
                      className="form-control form-underlined col"
          
                    />
                  </div>
                  <div className="mb-5 row underline-input">
                  <i className="bi bi-lock col-1"></i>
                    <input
                      type="password"
                      name="cpassword"
                      autoComplete="off"
                      onChange={inputEvent}
                      value={data.cpassword}
                      placeholder="Confirm your password"
                      className="form-control form-underlined col"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <button type="submit" onClick={postData} className="btn btn-primary submit-btn">
                    Register
                  </button>
                </form>
              </div>
              <div className="col-lg-5 order-0 order-lg-2 col-10 mx-auto d-flex flex-column justify-content-center align-items-center">
                <img className="img-fluid" src={Reg} alt="register image" />
                <NavLink to="/signin"><button type="button" className="btn mt-5">I am already registered</button></NavLink>
              </div>
            </div>
      </div>
    </section>
  );
};

export default Register;
