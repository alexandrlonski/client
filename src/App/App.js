import React from "react";
import{BrowserRouter} from "react-router-dom";
import AppRouter from "../components/AppRouter/AppRouter";
import Footer from "../components/Footer";
import NavbarTop from "../components/Header/Header";
import "./App.css"

function App() {
  return (
   <BrowserRouter>
     <NavbarTop/>
     <AppRouter />
     <Footer/>
   </BrowserRouter>
    
  );
}

export default App;
