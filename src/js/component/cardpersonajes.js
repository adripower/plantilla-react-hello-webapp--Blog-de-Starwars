import React,{useContext, useEffect,useState} from "react";
import { Context } from "../store/appContext";

export const Cardpersonajes =({personaje})=>{
    const{store,action}=useContext(Context)
    const[detalle,setDetalle]=useState({})
    useEffect(()=>{

    },[])
    return(
        <div className="col-12 col-md-4 col-lg-3" key={personaje.uid}>
									{personaje.name}
								</div>

    )

}