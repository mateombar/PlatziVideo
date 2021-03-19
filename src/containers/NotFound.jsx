import React from "react";
import Header from "../components/Header";
import "../assets/styles/NotFound.scss";
const NotFound = () => (
  <>
    <Header />
    <div className="NotFound">
      <div className="container">
        <h1>Ups</h1>
        <h4>La pagina que buscas no está disponible</h4>
      </div>
    </div>
  </>
);

export default NotFound;
