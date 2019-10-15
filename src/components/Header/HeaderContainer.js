import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import * as axios from 'axios';
import { setUserData } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true
      })
      .then(response => {
        if (response.data.result !== 0) {
          let { id, email, login } = response.data.data;
          this.props.setUserData(id, email, login);
        }
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
