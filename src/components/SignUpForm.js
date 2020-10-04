import React, { Component } from "react";
import { connect } from "react-redux";
import { signup } from "../actions/currentUser";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SignUpForm extends Component {
  state = {
    username: "",
    password: "",
    email: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.signup(this.state);
    this.props.history.push("/characters");

    this.setState({
      username: "",
      password: "",
      email: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Label> Username: </Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onChange}
          placeholder="username"
        />
        <Form.Label> Password: </Form.Label>
        <Form.Control
          type="text"
          name="password"
          value={this.state.password}
          onChange={this.onChange}
          placeholder="password"
        />
        <Form.Label> Email: </Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          placeholder="email"
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default connect(null, { signup })(SignUpForm);
