import React from 'react';
import { scripts_path } from '../consts';

class AddFrom extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cn: '',
			ou: '',
			employeenumber: ''
		}

		this.handleChangeFio = this.handleChangeFio.bind(this);
		this.handleChangeOu = this.handleChangeOu.bind(this);
		this.handleChangeNumber = this.handleChangeNumber.bind(this);
		this.createUser = this.createUser.bind(this);

	}

	handleChangeFio(event) {
		this.setState({
			cn: event.target.value
		})

	}

	handleChangeOu(event) {
		this.setState({
			ou: event.target.value
		})

	}

	handleChangeNumber(event) {
		this.setState({
			employeenumber: event.target.value
		})

	}

	createUser() {

		const newPost = {
			employeenumber: this.state.employeenumber, 
			cn: this.state.cn,
			ou: this.state.ou
		};

		if (newPost.ou.length < 1) {
			alert("Укажите группу!");
			return
		}

		if (newPost.cn.length < 1) {
			alert("Укажите ФИО!");
			return
		}

		if (newPost.employeenumber.length < 1) {
			alert("Укажите номер студенческого билета!");
			return
		}

		fetch(scripts_path + "create_user.php", {
			method: 'POST',
			header: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: JSON.stringify(newPost)
		  })
		  .then (response => response.json())
		  .then (response => {
			alert(response);
		  })
	}

	render() { 
		return (
			<div>
				<input className='input' name='cn' placeholder ="Введите ФИО пользователя" onChange={this.handleChangeFio}/>
				<input className='input' name='ou' placeholder ="Введите номер группы пользователя" onChange={this.handleChangeOu}/>
				<input className='input' name='employeeNumber' placeholder ="Введите номер студенческого билета пользователя" onChange={this.handleChangeNumber}/>
				<button className='button' onClick={this.createUser}>Добавить</button>
			</div>
		);
	}
};

export default AddFrom;