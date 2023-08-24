import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';
import './Styles/_custom-bootstrap.scss';
import './index.scss'
import Intro from './Components/Intro/Intro';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Tienda from './Components/Tienda/Tienda';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Header></Header>
      <Routes>
      <Route path="/" element={<Intro/>} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Tienda" element={<Tienda />} />
    </Routes>
    <Footer></Footer>
    </Router>
  </React.StrictMode>
)
