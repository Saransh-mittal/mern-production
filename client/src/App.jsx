import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Signin from "./components/Signin";
import About from "./components/About";
import Logout from "./components/Logout";
import "./App.css";
import { createContext, useReducer } from "react";
import {reducer, initialState} from "../src/reducer/UseReducer";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap.js";
//import "bootstrap/dist/css/bootstrap.min.css";0

export const userContext = createContext();
const App = () => {
const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <>
      <userContext.Provider value={{state,dispatch}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </userContext.Provider>
    </>
  );
};

export default App;
