import React from "react";
import { Context } from "../store/appContext";



import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<ul className="nav nav-pills">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">cambiar por el icono</a>
  </li>
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown"
	 href="#" role="button" aria-expanded="false">Favoritos</a>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Action</a></li>
      <li><a className="dropdown-item" href="#">Another action</a></li>
      <li><a className="dropdown-item" href="#">Something else here</a></li>
     
    </ul>
  </li>
 
 
</ul>
	);
};
