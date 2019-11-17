import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export const withNoAuthRedirect = Component =>
  connect(state => ({ isAuth: state.auth.isAuth }))(props =>
    props.isAuth ? <Component {...props} /> : <Redirect to={"/login"} />
  );
