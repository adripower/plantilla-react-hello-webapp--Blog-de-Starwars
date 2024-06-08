import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const CardPeople = ({ people }) => {
  const { store, actions } = useContext(Context);

  let token = localStorage.getItem("token");

  // let peopleFavorite = store.favorites[0]
  const addHeart = store.favorites.includes(people.name);
  // const isFavorite = store.favorites.includes(people.name, people.uid)

  function addOrDelFavorites(name) {
    let peopleFavorite = store.favorites[0];
    const isFavorite = peopleFavorite.filter((el) => el.name == name)[0];
    if (isFavorite) {
      actions.deleteFavoritesCharacters(people.uid);
    } else {
      actions.addFavoritesCharacters(people.name, people.uid);
    }
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-text">{people.name}</h5>
        <p className="card-text">Gender: </p>
        <p className="card-text">Hair color: </p>
        <p className="card-text">Eye color: </p>
        <Link to={"/detalles/people/" + people.uid}>
          <button href="#" className=" btn-outline-primary me-5">
            Learn more!
          </button>
        </Link>
        {token ? (
          <a
            href="#"
            className=" btn-outline-warning ms-5"
            onClick={(e) => addOrDelFavorites(people.name)}
          >
            <i
              className={`fa-regular fa-heart ${addHeart ? "fas" : "far"}`}
            ></i>
          </a>
        ) : null}
      </div>
    </div>
  );
};
