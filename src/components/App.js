import AddFrom from "./AddFrom.js";
import SearchForm  from "./SearchForm.js";
import "../normalize.css"
import "../style.css"
import Modal from "./Modal.js";
import LoginPage from "./LoginPage.js";
import { useState, useEffect } from "react";
import {
	Routes,
	Route,
	useNavigate} from "react-router-dom";
import { scripts_path } from "../consts.js";

function App() {
	const [modalActive, setModalActive] = useState(false)
	const [studntData, setStudntData] = useState([[1],[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]])
	const [sii, setSii] = useState([])
	const [isLoged, setIsLoged] = useState(false)
	const nav = useNavigate()

	useEffect(() => {
		if(isLoged === false){
			nav("/login")
		}
		else {
			nav("/home")
		}
		fetch(scripts_path + "proj.php", {
			method: 'GET',
			header: {'Content-Type': 'application/x-www-form-urlencoded'},
		  })
		  .then (response => response.json())
		  .then (response => {
			var arrObjects = []
			for (let i = 0; i < response.length; i++) {
				if (i === 0){
					continue
				}
				arrObjects.push({fio: response[i][0], id: response[i][2], login: response[i][3], group: response[i][1]})
			}
			setSii(arrObjects);
		  })
	}, [nav, isLoged])

  return (
    <div className="app">
		<Routes>
			<Route path = "/home" element = {
				<div className="app__containter">
						<div className="app__search">
						<SearchForm data = {sii} setStudntData = {setStudntData} setModalActive = {setModalActive}/>
						</div>
						<AddFrom />
						<Modal studntData = {studntData} setStudntData = {setStudntData} active = {modalActive} setActive = {setModalActive}/>
				</div>
			} />
			<Route path="/login" element = {<LoginPage setIsLoged = {setIsLoged}/>}/>
		</Routes>
    </div>
  );
}

export default App;