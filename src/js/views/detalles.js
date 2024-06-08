import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";
import "../../styles/index.css";


export const Detalles = () => {

    const params = useParams()
    const { store, actions } = useContext(Context)
    const type = params.type === "people" ? "characters" :
                     params.type === "planets" ? "planets" :
                     params.type === "vehicles" ? "vehicles" : "";


    useEffect(() => {
        actions.getInfo(params.type, params.uid)
    }, [])

    return (
        <>
            <div className="jumbotron">
                <div className="tittle-top d-flex justify-content-evenly">
                    <img src={type == "planets" && params.uid == "1" ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" : `https://starwars-visualguide.com/assets/img/${type}/${params.uid}.jpg`} className="img-left" alt="image" />
                    <div className="detalles-personaje d-block justify-content-center text-center">
                        <h1 className="titulo-nombre">{store.info?.properties?.name}</h1>
                        <p className="description">{store.info?.description}</p>
                    </div>
                </div>
                <div className="tittle-bottom">
                    <div className="d-flex justify-content-around text-center text-danger mt-4">
                        <div className="name-body d-block">
                            <h5 className="name-title">Name</h5>
                            <p className="name-text">{store.info?.properties?.name}</p>
                        </div>
                        <div className="birth-body d-block">
                            <h5 className="birth-title">{params.type === "people" ? "Birth year" :
                                                        params.type === "planets" ? "Climate" :
                                                        params.type === "vehicles" ? "Model" : ""}</h5>
                            <p className="birth-text">{
                                        params.type == "people" ? store.info?.properties?.birth_year :
                                        params.type == "planets" ? store.info?.properties?.climate :
                                        params.type == "vehicles" ? store.info?.properties?.model : ""}</p>
                        </div>
                        <div className="gender-body d-block">
                            <h5 className="gender-title">{params.type === "people" ? "Gender" :
                                                        params.type === "planets" ? "Diameter" :
                                                        params.type === "vehicles" ? "Crew" : ""}</h5>
                            <p className="gender-text">{
                                        params.type == "people" ? store.info?.properties?.gender :
                                        params.type == "planets" ? store.info?.properties?.diameter :
                                        params.type == "vehicles" ? store.info?.properties?.crew : ""}</p>
                        </div>
                        <div className="height-body d-block">
                            <h5 className="height-title">{params.type === "people" ? "Height" :
                                                        params.type === "planets" ? "Terrain" :
                                                        params.type === "vehicles" ? "Passengers" : ""}</h5>
                            <p className="height-text">{
                                        params.type == "people" ? store.info?.properties?.height :
                                        params.type == "planets" ? store.info?.properties?.terrain :
                                        params.type == "vehicles" ? store.info?.properties?.passengers : ""}</p>
                        </div>
                        <div className="skin-body d-block">
                            <h5 className="skin-title">{params.type === "people" ? "Skin Color" :
                                                        params.type === "planets" ? "Gravity" :
                                                        params.type === "vehicles" ? "Vehicle class" : ""}</h5>
                            <p className="skin-text">{
                                        params.type == "people" ? store.info?.properties?.skin_color :
                                        params.type == "planets" ? store.info?.properties?.gravity :
                                        params.type == "vehicles" ? store.info?.properties?.vehicle_class : ""}</p>
                        </div>
                        <div className="eye-body d-block">
                            <h5 className="eye-title">{params.type === "people" ? "Eye Color" :
                                                        params.type === "planets" ? "Population" :
                                                        params.type === "vehicles" ? "Length" : ""}</h5>
                            <p className="eye-text">{
                                        params.type == "people" ? store.info?.properties?.eye_color :
                                        params.type == "planets" ? store.info?.properties?.population :
                                        params.type == "vehicles" ? store.info?.properties?.length : ""}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

};