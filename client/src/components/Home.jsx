import { useEffect, useState } from "react";


const Home = () => {
  const [userName, setUserName] = useState();
  const dynamicHomePage = async () => {
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
      setUserName(data.name);
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
    dynamicHomePage();
  }, []);
  return (
    <div className="home-page">
      <div className="home-div">
        <h4 className="home-h4">WELCOME</h4>
       {userName ?  <h2>{userName}</h2> : <h2>we are the mern stack developers</h2>}
        {userName ? <h5>Glad, To See You Back</h5>:<></>}
      </div>
    </div>
  )
}

export default Home
