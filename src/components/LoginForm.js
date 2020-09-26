import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { login } from "../actions/currentUser";
import { connect } from "react-redux";

class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
    this.props.history.push("/");

    this.setState({
      username: "",
      password: "",
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default connect(null, { login })(LoginForm);
