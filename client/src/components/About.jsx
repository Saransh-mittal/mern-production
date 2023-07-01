import { useEffect, useState } from "react";
import About_img from "../images/about_img.png";
import { useNavigate } from "react-router-dom";
// import { Tabs, Tab } from "react-bootstrap";
const About = () => {
  const navigate = useNavigate();
  const [userData,setUserData] = useState({});
  const callAboutPage = async () => {
    try {
      const res = await fetch("/api/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data  = await res.json();
      setUserData(data);
      console.log(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/signin");
    }
  };
  useEffect(() => {
    callAboutPage();
  },[]);

  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img className="img-fluid" src={About_img} alt="about me" />
          </div>
          <div className="col-md-6 position-relative">
            <h3> {userData.name} </h3>
            <h4> {userData.work} </h4>
            <p>
              RANKINGS : <span className="rank">1/10</span>
            </p>

            <ul className="nav nav-under tabs">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#menu1">
                  TimeLine
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <button
              type="button"
              className="btn btn-secondary btn-sm rounded-5"
            >
              Edit Profile
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p className="para"> WORK LINK </p>
              <a
                className="work-link link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="https://www.youtube.com/"
              >
                Youtube
              </a>

              <a
                className="work-link link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="https://www.youtube.com/"
              >
                Instagram
              </a>

              <a
                className="work-link link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="https://www.youtube.com/"
              >
                Twitter
              </a>

              <a
                className="work-link link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="https://www.youtube.com/"
              >
                Figma
              </a>

              <a
                className="work-link link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="https://www.youtube.com/"
              >
                Twitch
              </a>

              <a
                className="work-link link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="https://www.youtube.com/"
              >
                PortFolio
              </a>
            </div>
          </div>
          <div className="col-md-8 pl-5 about-info">
            <div className="tab-content">
              <div className="tab-pane active" id="home">
                <div className="row">
                  <div className="col-md-6">
                    <label className="about-label">USER ID</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData._id}</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="about-label">NAME</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.name}</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="about-label">EMAIL</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.email}</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="about-label">PROFESSION</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.work}</p>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <label className="about-label">PHONE</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.phone}</p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="menu1">
                TimeLine
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
