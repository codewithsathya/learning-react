import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  componentDidMount() {
    this.username.current.focus();
  };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input ref={this.username} id="username"  type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input id="" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
