import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


import Home from './components/Profile.jsx';
import Games from './components/Games.jsx';

import logo from './assets/logo.png';
import './App.css'; 

function App() {

  return (
    <Router>
      <Navbar bg="bright" variant="bright" expand="lg" fixed="top" className="nav-bar">
 
        <Container>
          <Navbar.Brand href="/" className="logo-container">
          <img
              src={logo}
              alt="Logo"
              style={{ height: '50px' }}
            />
            yobisaboy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home">Profile</Nav.Link>
              <Nav.Link as={Link} to="/games">Games</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <div className="page-container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="games" element={<Games />} />
        </Routes>
      </div>

    </Router>


  );
}

export default App;
