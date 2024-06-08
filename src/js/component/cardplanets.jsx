import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


export const CardPlanets = ({ planets }) => {

  const { store, actions } = useContext(Context)
  // console.log(planets);

  const addHeart = store.favorites.includes(planets.name)

  let token = localStorage.getItem("token")
  
  function addOrDelFavorites(name) {
    let planetFavorite = store.favorites[1]
    console.log(planetFavorite);
    const isFavorite = planetFavorite.filter(el => el.name == name)[1]
    console.log(isFavorite);
    if (isFavorite) {
      actions.deleteFavoritesPlanets(planets.uid)
    }else {
      actions.addFavoritesPlanets(planets.name, planets.uid)
      
    }
  }
  // function deleteFavorites() {
  //   actions.deleteFavoritesPlanets(planets.uid)
  // }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={ planets.uid == 1 ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" : `https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`} className="card-img-top" alt="image" />
      <div className="card-body">
        <h5 className="card-text">{planets.name}</h5>
        <p className="card-text">Population: </p>
        <p className="card-text">Terrain: </p>
        <Link to={"/detalles/planets/" + planets.uid}>
          <button href="#" className="btn btn-outline-primary me-5">Learn more!</button>
        </Link>
        {token ? <a href="#" className="btn btn-outline-warning ms-5" onClick={e => addOrDelFavorites(planets.name)}><i className={`fa- regular fa-heart ${addHeart ? "fas" : "far"}`}></i></a> 
        : null }
      </div>
    </div>
  );
};