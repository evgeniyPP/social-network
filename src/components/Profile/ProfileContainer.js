import React from "react";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getProfile,
  getStatus,
  updateStatus
} from "../../redux/profile-reducer";
import { compose } from "redux";
import {
  selectProfile,
  selectStatus,
  selectIsAuth,
  selectId
} from "../../utils/selectors";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId =
      this.props.match.params.userId ||
      this.props.myUserId ||
      this.props.history.push("/login");
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = state => ({
  profile: selectProfile(state),
  status: selectStatus(state),
  isAuth: selectIsAuth(state),
  myUserId: selectId(state)
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { getProfile, getStatus, updateStatus }
  )
)(ProfileContainer);
