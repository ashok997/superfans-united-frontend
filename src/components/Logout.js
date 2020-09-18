import React from "react";
import Button from "react-bootstrap/Button";
import { logout } from "../actions/currentUser";
import { connect } from "react-redux";

const Logout = ({ logout }) => {
  return (
    <Button variant="primary" type="submit">
      Logout
    </Button>
  );
};

export default connect(null, { logout })(Logout);
