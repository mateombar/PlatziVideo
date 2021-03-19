import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { gravatar } from "../utils/gravatar";
import { logoutRequest } from "../actions/index";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = (props) => {
  const { user, isGreen = false, logoutRequest } = props;
  const isGreenHeader = isGreen ? "green" : "";
  const hasUser = Object.keys(user).length > 0;
  const handleLogout = () => {
    logoutRequest();
  };

  // const headerClass = classNames('header', {
  //   isLogin,
  //   isRegister
  // })
  return (
    <header className={`header ${isGreenHeader}`}>
      <Link to="/">
        <img className="header__img" src={logo} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ? (
            <img src={gravatar(user.email)} alt={user.email} />
          ) : (
            <img src={userIcon} alt="" />
          )}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser && (
            <li>
              <Link to="/adawd">{user.name}</Link>
            </li>
          )}
          {hasUser ? (
            <li>
              <Link to="/login" onClick={handleLogout}>
                Cerar Sesión
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToPops = {
  logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToPops)(Header);

Header.propTypes = {
  user: PropTypes.object,
  isGreen: PropTypes.bool,
};
