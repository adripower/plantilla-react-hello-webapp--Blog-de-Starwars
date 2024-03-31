import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Cardpersonajes } from "../component/cardpersonajes";
import { Cardplanetas } from "../component/Cardplanetas";

export const Home = () => {
	const {store,actions} =useContext(Context)
	console.log(store.personajes);
	return (
		<div className="container">
			<div className="row">
				<h2>personajes</h2>
				<div style={{display:"flex",overflowX:"scroll" }}> 
					{
						store.personajes.map((personaje)=>{
							return(
								<Cardpersonajes personaje={personaje} key={personaje.uid}/>
							)
						})
					}
				</div>

				<h2>Planetas</h2>
				<div style={{display:"flex",overflowX:"scroll" }}> 
					{
						store.planetas.map((planeta)=>{
							return(
								<Cardplanetas planeta={planeta} key={planeta.uid}/>
							)
						})
					}
				</div>

			</div>
		</div>
	)
}