import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

const Logout = () => {
    const navigate = useNavigate();
    const {state,dispatch} = useContext(userContext);
    const logoutFunc = async () => {
        try {
          const res = await fetch("/api/logout", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
    
          dispatch({type:"USER",payload:false});
          navigate("/signin");
          if (!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        logoutFunc();
      },[]);
  return (
    <></>
  );
}

export default Logout
