import React, { Component } from "react";
import Form from "react-bootstrap/Form";

export default class NewUserForm extends Component {
  render() {
    return (
      <div class="new-user-container">
        <Form>
          <Form.Label> Name: </Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form>
      </div>
    );
  }
}
