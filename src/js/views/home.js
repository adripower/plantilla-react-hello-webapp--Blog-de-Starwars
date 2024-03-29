import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Cardpersonajes } from "../component/cardpersonajes";

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
			</div>
		</div>
	)
}