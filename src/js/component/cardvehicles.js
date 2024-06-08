import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardVehicles = ({ vehicles }) => {
  const { store, action } = useContext(Context);
  const addHeart = store.favorites.includes(vehicles.name);
  function addFavorites() {
    actions.favoriteList(vehicles.name);
  }
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-text">{vehicles.name}</h5>
        <Link to={"/detalles/vehicles/" + vehicles.uid}>
          <button href="#" className="btn btn-outline-primary me-5">
            Learn more!
          </button>
        </Link>
        <a
          href="#"
          className="corazon btn btn-outline-warning ms-5"
          onClick={addFavorites}
        >
          <i className={`fa- regular fa-heart ${addHeart ? "fas" : "far"}`}></i>
        </a>
      </div>
    </div>
  );
};
