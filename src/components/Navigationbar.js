import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Alert from "react-bootstrap/Alert";
import { Nav } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <>
      <Navbar bg="dark" className="justify-content-end">
        <Nav.Link>
          <Link to="/">My Characters</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/search">Search Characters</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/characters">All Characters</Link>
        </Nav.Link>
      </Navbar>
      <Alert variant="info">
        <center>
          <h3>You are Logged In as Tony Stark</h3>
        </center>
      </Alert>
    </>
  );
};

export default Navigationbar;
