import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Alert from "react-bootstrap/Alert";
import { Nav } from "react-bootstrap";
import Logout from "./Logout";

const Navigationbar = ({ currentUser }) => {
  return (
    <>
      <Navbar bg="dark" className="justify-content-end">
        {currentUser ? (
          <Nav.Link>
            <Link to="/">My Characters</Link>
          </Nav.Link>
        ) : (
          <>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/signup">Sign Up</Link>
            </Nav.Link>
          </>
        )}

        <Nav.Link>
          <Link to="/search">Search Characters</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/characters">All Characters</Link>
        </Nav.Link>
      </Navbar>
      <Alert variant="info">
        <center>
          {currentUser ? (
            <p>
              Welcome to Superfans United. You are logged in as "
              {currentUser.username}"
            </p>
          ) : (
            <>
              <p>Welcome to Superfans United. </p>
              <p> Please Login or Sign up to continue </p>
            </>
          )}
          {currentUser ? <Logout /> : ""}
        </center>
      </Alert>
    </>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(Navigationbar);
