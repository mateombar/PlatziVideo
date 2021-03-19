import React from "react";
import { useLocation } from "react-router-dom";
import "../assets/styles/components/Search.scss";

const Search = () => {
  const location = useLocation();
  const inputStyle = location.pathname === "/" ? "input-home" : "";
  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text" className={`input ${inputStyle}`} placeholder="Buscar..." />
    </section>
  );
};

export default Search;
