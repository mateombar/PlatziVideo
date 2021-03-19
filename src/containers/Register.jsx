import React from "react";
import { connect } from "react-redux";
import { useInputValue } from "../hooks/useInputValue";
import { Link, useHistory } from "react-router-dom";
import Header from "../components/Header";
import { registerRequest } from "../actions/index";
import "../assets/styles/components/Register.scss";
const Register = (props) => {
  const { registerRequest } = props;
  const email = useInputValue("");
  const password = useInputValue("");
  const name = useInputValue("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    registerRequest(formValues);
    history.push("/");
  };

  return (
    <>
      <Header isGreen={true} />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              {...name}
              placeholder="Nombre"
            />
            <input
              className="input"
              type="text"
              {...email}
              placeholder="Correo"
            />
            <input
              className="input"
              type="password"
              {...password}
              placeholder="Contraseña"
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
