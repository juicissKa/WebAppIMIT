import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import "../style.css"
import "../consts.js"
import { scripts_path } from '../consts.js';

const LoginPage = (props) => {
	const [log, setLog] = useState("");
	const [password, setPassword] = useState("");


	const login = () => {
		var newPost = {
			login: log,
			pass: password
		}
		fetch(scripts_path + "login.php", {
			method: 'POST',
			header: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: JSON.stringify(newPost)
		  })
		  .then (response => response.json())
		  .then (response => {
			if (response === true){
				props.setIsLoged(true);
				nav("/home")
			} else {
				alert("Неправельный логин или пароль")
			}
		  })
	}

	const nav = useNavigate()
	
	return (
		<div className='login'>
			<div className='login__container'>
				<div className='login__header'>Вход</div>
				<input className='input' placeholder ="Введите логин" onChange={(e) => setLog(e.target.value)}/>
				<input type="password" className='input' placeholder ="Введите пароль" onChange={(e) => setPassword(e.target.value)}/>
				<div className='login__button'>
					<button className='button login__button' onClick={login}>Войти</button>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;