import React, { useEffect } from "react";
import { compose } from "redux";
import { Provider, connect } from "react-redux";
import { BrowserRouter, withRouter, Route } from "react-router-dom";
import { store } from "./redux/redux-store";
import { initializeApp } from "./redux/app-reducer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/dummies/News";
import Music from "./components/dummies/Music";
import Settings from "./components/dummies/Settings";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import "./App.css";

const App = props => {
  useEffect(() => {
    props.initializeApp();
  }, [props]);

  if (!props.initialized) {
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
};

const mapStateToProps = state => ({
  initialized: state.app.initialized
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

export default () => (
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
);
