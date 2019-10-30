import React from "react";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getProfile } from "../../redux/profile-reducer";
import { withNoAuthRedirect } from "../hoc/withNoAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId || 2;
    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile
});

export default compose(
  connect(
    mapStateToProps,
    { getProfile }
  ),
  withNoAuthRedirect,
  withRouter
)(ProfileContainer);
