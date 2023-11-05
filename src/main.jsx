import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./Styles/_custom-bootstrap.scss";
import "./index.scss";
import Intro from "./Components/Intro/Intro";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Tienda from "./Components/Tienda/Tienda";
import { CarritoProvider } from "./contexts/CarritoContext";
import { ProductosProvider } from "./contexts/ProductosContext";
import { Carrito } from "./Components/Carrito/Carrito";
import { Login } from "./Components/Login/Login";
import { Alta } from "./Components/Alta/Alta";
import { ProductoEdit } from "./Components/Alta/ProductoEdit/ProductoEdit";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <ProductosProvider>
      <CarritoProvider>
      
    <Router>
      
      <Header></Header>
 
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/alta" element={<Alta/>}/>
        </Routes>
    
      <Footer></Footer>
    </Router>
    
    </CarritoProvider>
    </ProductosProvider>
  </React.StrictMode>
);
