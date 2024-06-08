import React,{useContext, useEffect,useState} from "react";
import { Context } from "../store/appContext";



export const Cardpersonajes =({people })=>{
    const{store,action}=useContext(Context)
    const addHeart = store.favorites.includes(people.name)
    function addFavorite() {
        actions.favoriteList(people.name)
      }

    return (
        <div className="card" style={{ width: "18rem" }}>
          <img src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`} className="card-img-top" alt="imagen del personaje" />
          <div className="card-body">
            <h5 className="card-text">{people.name}</h5>
            <Link to={"/detalles/people/" + people.uid}>
              <button href="#" className="btn btn-outline-primary me-5">Learn more!</button>
            </Link>
            <a href="#" className="btn btn-outline-warning ms-5" onClick={addFavorite}><i className={`fa- regular fa-heart ${addHeart ? "fas" : "far"}`}></i></a>
          </div>
        </div>
      );
    };