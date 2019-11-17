import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "./Header";
import { logout } from "../../redux/reducers/auth-reducer";
import { selectIsAuth, selectLogin } from "../../utils/selectors";

const mapStateToProps = state => ({
  isAuth: selectIsAuth(state),
  login: selectLogin(state)
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    { logout }
  )
)(Header);
