import React, { Suspense, lazy, useEffect } from "react";
import { compose } from "redux";
import { Provider, connect } from "react-redux";
import {
  BrowserRouter,
  withRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { store } from "./redux/redux-store";
import { initializeApp } from "./redux/reducers/app-reducer";
import Header from "./components/Header/HeaderContainer";
import Users from "./components/Users/UsersContainer";
import Navbar from "./components/Navbar/Navbar";
import Dummy from "./utils/common/Dummy";
import Login from "./components/Login/LoginContainer";
import Preloader from "./utils/common/Preloader";
import "./css/App.css";
const Profile = lazy(() => import("./components/Profile/ProfileContainer"));
const Dialogs = lazy(() => import("./components/Dialogs/DialogsContainer"));

const App = props => {
  useEffect(() => {
    props.initializeApp();
  }, [props]);

  if (!props.initialized) {
    return <Preloader />;
  }

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper__content">
        <Suspense fallback={<Preloader />}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/profile" />
            </Route>
            <Route path="/profile/:userId?" render={() => <Profile />} />
            <Route path="/dialogs" render={() => <Dialogs />} />
            <Route path="/news" render={() => <Dummy />} />
            <Route path="/music" render={() => <Dummy />} />
            <Route path="/settings" render={() => <Dummy />} />
            <Route path="/users" render={() => <Users />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="*" render={() => <p>404 NOT FOUND</p>} />
          </Switch>
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
