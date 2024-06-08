import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CardPeople } from "../component/cardpeople.jsx";
import { CardPlanets } from "../component/cardplanets.jsx";
import { CardVehicles } from "../component/cardvehicles.jsx";



export const Favorites = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.getFavorites()
		// actions.favoritesCharacters()
	}, [])
	console.log(store.favorites);

	return (
		<div className="favorites">
			<h1 className="tittle-user text-center text-warning bg-secondary">FAVORITOS</h1>
			{/* /* HACER UN MAP DE DATA**/}
			<h2 className="Favoritos">Characters</h2>
			{/* <ul className="Favorites-list">
						{store.favorites.length === 0 ?
							<li className="text-center">(empty)</li>
							: store.favorites.map((item, index) => {
								return (
									<li key={index}>
										<a className="dropdown-item text-center" href="#">{item} <i className="fa-solid fa-trash" onClick={() => actions.deleteFavorite(item)}></i></a>
									</li>)
							})}

					</ul> */}
		</div>
	)
};

