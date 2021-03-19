import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Header from "../components/Header";
import { loginRequest } from "../actions/index";
import { useInputValue } from "../hooks/useInputValue";
import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

import "../assets/styles/components/Login.scss";
const Login = (props) => {
  const email = useInputValue("");
  const password = useInputValue("");
  const loginRequest = props.loginRequest;
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = { email: email.value, password: password.value };
    loginRequest(formValues);
    history.push("/");
  };

  return (
    <>
      <Header isGreen={true}/>
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input
              className="input"
              name="email"
              type="text"
              {...email}
              placeholder="Correo"
            />
            <input
              className="input"
              name="password"
              type="password"
              {...password}
              placeholder="Contraseña"
            />
            <button className="button" type="submit">
              Iniciar sesión
            </button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />
                Recuérdame
              </label>
              <Link to="/">Olvidé mi contraseña</Link>
            </div>
          </form>
          <section className="login__container--social-media">
            <div>
              <img src={googleIcon} /> Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} /> Inicia sesión con Twitter
            </div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta {' '}<Link to="/register">Regístrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};
const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);
