import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext.js";

import { CardPeople } from "../component/cardpeople.jsx";
import { CardPlanets } from "../component/cardplanets.jsx";
import { CardVehicles } from "../component/cardvehicles.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.getPeople(),
		actions.getPlanets(),
		actions.getVehicles(),
		actions.getInfo(),
		actions.getFavorites()
	}, [])



	return (
		<div className="home">
			<h2 className="tittles text-danger ms-5">Characters</h2>
			<div className="cards d-flex mx-4" style={{ overflowX: "scroll" }}>
				{store.peoples.map((people) => {
					return (
						<div className="text m-3" key={people.uid}>

							<CardPeople people={people}
								// type={people}
								name={people.name}

							/>

						</div>
					);
				})}
			</div>

			<h2 className="tittles text-danger mt-3 ms-5">Planets</h2>
			<div className="cards d-flex mx-4" style={{ overflowX: "scroll" }}>
				{store.planets.map((planet) => {
					return (
						<div className="text m-3" key={planet.uid}>

							<CardPlanets planets={planet}
								// type={planet}
								name={planet.name}

							/>

						</div>
					);
				})}
			</div>

			<h2 className="tittles text-danger mt-3 ms-5">Vehicles</h2>
			<div className="cards d-flex mx-4" style={{ overflowX: "scroll" }}>
				{store.vehicles.map((vehicle) => {
					return (
						<div className="text m-3" key={vehicle.uid}>

							<CardVehicles vehicles={vehicle}
								// type={vehicle}
								name={vehicle.name}

							/>

						</div>
					);
				})}
			</div>

		</div>
	)
};
