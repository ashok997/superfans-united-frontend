import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class UserContainer extends Component {
  render() {
    return (
      <div class="user-login-container">
        <Form>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            // value={this.state.name}
            // onChange={this.handleChange}
          />
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Email"
            // value={this.state.email}
            // onChange={this.handleChange}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
