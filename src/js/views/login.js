import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";

import { LoginForm } from "../component/loginform.jsx";

export const Login = () => {

	const { store, actions } = useContext(Context)


	return (
		<div className="Login">
            <LoginForm />
		</div>
	)
};
