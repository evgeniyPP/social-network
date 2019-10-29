import React from "react";
import Profile from "./Profile";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || 2;
    this.props.getProfile(userId);
  }

  render() {
    if (this.props.isAuth === false) return <Redirect to={"/login"} />;
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

const UrlDataComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  { getProfile }
)(UrlDataComponent);
