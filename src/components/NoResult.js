import React from "react";
import Alert from "react-bootstrap/Alert";

export default function NoResult() {
  return (
    <Alert variant="info">
      <p> Sorry ! Your search have returned no results !! </p>
      <p> Please try again !!</p>
    </Alert>
  );
}
