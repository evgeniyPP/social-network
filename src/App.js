import React, { Suspense, lazy, useEffect } from "react";
import { compose } from "redux";
import { Provider, connect } from "react-redux";
import { BrowserRouter, withRouter, Route } from "react-router-dom";
import { store } from "./redux/redux-store";
import { initializeApp } from "./redux/app-reducer";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Navbar from "./components/Navbar/Navbar";
import Dummy from "./components/common/Dummy/Dummy";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import "./App.css";
const ProfileContainer = lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const DialogsContainer = lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);

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
        <Suspense fallback={<Preloader />}>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/news" render={() => <Dummy />} />
          <Route path="/music" render={() => <Dummy />} />
          <Route path="/settings" render={() => <Dummy />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </Suspense>
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
