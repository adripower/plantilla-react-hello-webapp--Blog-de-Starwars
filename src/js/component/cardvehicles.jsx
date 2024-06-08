import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const CardVehicles = ({ vehicles }) => {

  const { store, actions } = useContext(Context)
  // console.log(vehicles);

  const addHeart = store.favorites.includes(vehicles.name)

  let token = localStorage.getItem("token")

  function addFavorites() {
    // actions.addFavorite(vehicles.name)
    // actions.addFavoritesVehicles(vehicles.name, vehicles.uid)
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-text">{vehicles.name}</h5>
        <p className="card-text">Model: </p>
        <p className="card-text">Vehicle_class: </p>
        <Link to={"/detalles/vehicles/" + vehicles.uid}>
          <button href="#" className="btn btn-outline-primary me-5">Learn more!</button>
        </Link>
        {token ? <a href="#" className="btn btn-outline-warning ms-5" onClick={addFavorites}><i className={`fa- regular fa-heart ${addHeart ? "fas" : "far"}`}></i></a> 
        : false }
      </div>
    </div>
  );
};