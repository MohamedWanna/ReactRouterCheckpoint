import React from "react";
import {Button, Container,Nav,Navbar} from "react-bootstrap"; 
import { NavLink } from "react-router-dom";
const Navigation = () => {
    
  return (
    <div>
    <Navbar bg="secondary" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><h1 className="sitetitle">Home Of Movies</h1></Navbar.Brand>
    <Nav className="me-auto">
      <NavLink to="/" style={{color:'white'}}>
        <Button variant="primary" className="button">Home</Button>
      </NavLink>
      <NavLink to="/MovieList" style={{color:'white'}}>
        <Button variant="primary" className="button">List of Movies</Button>
      </NavLink>
      <NavLink to="/AddMovie" style={{color:'white'}}>
        <Button variant="primary" className="button">Add Movie</Button>
      </NavLink>
    </Nav>
    </Container>
  </Navbar>
    </div>
  );
};

export default Navigation;
