import React, { useState, useEffect} from 'react';
import TableForm from "./TableForm.js";
import { scripts_path } from '../consts.js';

class SearchForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchId: "",
			searchLogin: "",
			searchGroup: "",
			searchFio: "",
			filterData: []
		};

		this.handleChangeLogin = this.handleChangeLogin.bind(this);
		this.handleChangeId = this.handleChangeId.bind(this);
		this.handleChangeGroup = this.handleChangeGroup.bind(this);
		this.handleChangeFio = this.handleChangeFio.bind(this);
		this.filter = this.filter.bind(this)

	}

	componentDidMount() {
	}

	handleChangeLogin(event) {
		this.setState({
			searchLogin: event.target.value
		})

	}

	handleChangeId(event) {
		this.setState({
			searchId: event.target.value
		})

	}

	handleChangeFio(event) {
		this.setState({
			searchFio: event.target.value
		})

	}

	handleChangeGroup(event) {
		this.setState({
			searchGroup: event.target.value
		})

	}

	filter() {
		const newPost = {
			uidnumber: this.state.searchId,
			uid: this.state.searchLogin,
			cn: this.state.searchFio,
			ou: this.state.searchGroup,
		};
		fetch(scripts_path + "search_test.php", {
			method: 'POST',
			header: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: JSON.stringify(newPost)
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
			this.setState({
				filterData: arrObjects
			});
		  })
	}

	render() {
		this.filter();
		return (
			<div className='search'>
				<div className='search__search'>
					<input className='input' placeholder ="Введите id пользователя" onChange={this.handleChangeId}/>
					<input className='input' placeholder ="Введите ФИО пользователя" onChange={this.handleChangeFio}/>
					<input className='input' placeholder ="Введите логин пользователя" onChange={this.handleChangeLogin}/>
					<input className='input' placeholder ="Введите номер группы пользователя" onChange={this.handleChangeGroup}/>
				</div>
				<div className='search__table'>
					<TableForm data = {this.state.filterData} setModalActive ={this.props.setModalActive} setStudntData = {this.props.setStudntData}/>
				</div>
			</div>
		);
	}
}

export default SearchForm;