import React from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "./LoginForm";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";

const Login = props => {
  const onSubmit = formData => {
    const { email, password, rememberMe } = formData;
    props.login(email, password, rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
