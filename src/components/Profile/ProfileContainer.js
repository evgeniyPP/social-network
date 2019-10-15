import React from "react";
import * as axios from "axios";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setProfile } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    const userId = this.props.match.params.userId || 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile
});

const UrlDataComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  { setProfile }
)(UrlDataComponent);
