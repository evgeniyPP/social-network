import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "../../components/Header/HeaderContainer";
import Navbar from "../../components/Navbar/Navbar";
import ProfileContainer from "../../components/Profile/ProfileContainer";
import DialogsContainer from "../../components/Dialogs/DialogsContainer";
import News from "../../components/dummies/News";
import Music from "../../components/dummies/Music";
import Settings from "../../components/dummies/Settings";
import UsersContainer from "../../components/Users/UsersContainer";
import Login from "../../components/Login/Login";
import Preloader from "../../components/common/Preloader/Preloader";
import { compose } from "redux";
import { connect } from "react-redux";
import { initializeApp } from "../../redux/app-reducer";
import { withRouter } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper__content">
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { initializeApp }
  )
)(App);
