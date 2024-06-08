import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {

	const { store, actions } = useContext(Context)
	const navigate = useNavigate()

	function logout() {
		actions.logout();
		navigate("/");
		window.location.reload();
	}

	let token = localStorage.getItem("token")

	function removeFavorite(indexType, id) {
		let type;
		if (indexType === 0) {
			type = "people";
		} else if (indexType === 1) {
			type = "planets";
		} else {
			type = "vehicles";
		}
		actions.removeFav(type, id);
	};


	return (
		<nav className="navbar navbar-light bg-light mb-3 py-4">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5"><img className="logostarwars" src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="" /></span>
			</Link>
			<div className="favorites ml-auto">
				{token ?
					<div className="btn-group me-2">
						<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites<span className="badge bg-secondary mx-1">{store.favorites[0]?.length + store.favorites[1]?.length + store.favorites[2]?.length}</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.length === 0 ?
								<li className="text-center">(empty)</li>
								: store.favorites.map((elem, indexType) => {
									
									return (
										elem.map((item, index) => {
											console.log(item);
											return (
												<li key={index}>
													<a className="dropdown-item text-center" href="#">
														{item.name}
														<i className="fa-solid fa-trash" onClick={() => removeFavorite(indexType, item.id)}>
														</i>
													</a>
												</li>)
										})
									)
								})}

						</ul>
						<button type="button" className=" btn-success ms-2 rounded" onClick={logout}>Logout</button>
					</div>
					: <Link to="/login">
						<button type="button" className=" btn-success">Login</button>
					</Link>}
			</div>
		</nav>
	);
};
