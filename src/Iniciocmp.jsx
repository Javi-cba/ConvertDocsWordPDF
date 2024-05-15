import { Link } from "react-router-dom";
import React from "react";
import Convertdoccpm from "./Convertdoccpm";

const Iniciocmp = () => {
  return (
    <div>
      <nav class="navbar  navbar-expand-lg navbar-light navb p-1">
        <img
          src="https://c8.alamy.com/compes/2dybm2b/convertir-el-archivo-pdf-a-la-ilustracion-del-vector-del-icono-del-glifo-de-word-pad-2dybm2b.jpg"
          width="40"
          height="50"
          class="navbar-brand d-inline-block align-top rounded-circle"
          alt="IMFF"
        />
        <b>CONVERSOR WORD A PDF</b>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/home" class="nav-link ">
                Home
              </Link>
            </li>
            <li class="nav-item ">
              <Link to="/users" class="nav-link ">
                Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Convertdoccpm />
    </div>
  );
};
export default Iniciocmp;
