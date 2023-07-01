import Phone from "../images/phone.png";
import Email from "../images/email.png";
import Addr from "../images/addr.png";
import { useEffect, useState } from "react";
const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const contactData = async () => {
    try {
      const res = await fetch("/api/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setUserData(data);
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    contactData();
  }, []);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const postData = async (e) =>{
    e.preventDefault();
    const {name,email,phone,message} = userData;
    const res = await fetch("/api/contact",{
      method:"POST",
      headers:{
       "Content-Type":"application/json"
      },
      body: JSON.stringify({name,email,phone,message})
    });

    const data = res.json();
    console.log(data);
    if(!data) console.log(`Message not send`);
    else {
      window.alert(`Message send successfully`);
      setUserData({...userData,message:""});
    }
  }

  return (
    <section id="contact" className="h-100 d-flex">
      <div className="container-fluid contact-container">
        <div className="row contact-main-first-div">
          <div className="col-6 col-md-3 contact-first-div">
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <img src={Phone} alt="phone" />
              </div>
              <div className="col">
                <h4>Phone</h4>
                <h6>+91735452957</h6>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 contact-first-div">
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <img src={Email} alt="phone" />
              </div>
              <div className="col">
                <h4>Email</h4>
                <h6>saransh@gmail.com</h6>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 contact-first-div">
            <div className="row">
              <div className="col-2 d-flex justify-content-center align-items-center">
                <img src={Addr} alt="phone" />
              </div>
              <div className="col">
                <h4>Address</h4>
                <h6>xyz</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex w-50 get-in-touch">
          <form method="POST">
            <h1 className="h1-contact">Get In Touch</h1>
            <div className="d-grid">
              <div className="row d-flex justify-content-between contact-second-div">
                <div className="col-8 col-md-3 p-0 contact-info">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    onChange={inputHandler}
                    value={userData.name}
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="col-8 col-md-3 p-0 contact-info">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    onChange={inputHandler}
                    value={userData.email}
                    name="email"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="col-8 col-md-3 p-0 contact-info">
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    onChange={inputHandler}
                    value={userData.phone}
                    name="phone"
                    placeholder="Phone no."
                  />
                </div>
              </div>
              <div className="row">
                <textarea
                  className="form-control message-form"
                  onChange={inputHandler}
                  value={userData.message}
                  name="message"
                  placeholder="Message"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="row contact-submit">
                <button onClick={postData} type="submit" className="btn btn-primary submit-btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
