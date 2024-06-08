import React, { useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";



export const LoginForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const { store, actions } = useContext(Context)

    const navigate = useNavigate() async function handleSubmit(e) {
        e.preventDefault()
        console.log();
        const isLogged = await actions.login(email, password, name)
        if (isLogged) {
            actions.getFavorites()
            navigate("/");
        }
    }

    return (
        <div className="form">
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" onChange={(event) => { setPassword(event.target.value) }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Full name" onChange={(event) => { setName(event.target.value) }} />
                </div>
                <button type="submit" className="save btn btn-primary">Login</button>

            </form>
           
        </div>
    );
};