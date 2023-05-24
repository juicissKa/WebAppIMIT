import { useEffect, useState } from "react";
import { scripts_path } from "../consts";

const Modal = (props) => {
	const change = () => {
		const newPost = {
			prefferedlanguage: inputModal,
			givenname: inputModal1,
			uid: inputModal2,
			mail: inputModal3,
			uidnumber: inputModal4,
			cn: inputModal5,
			initials: inputModal6,
			loginshell: inputModal7,
			employeenumber: inputModal8,
			o: inputModal9,
			gecos: inputModal10,
			l: inputModal11,
			homedirectory: inputModal12,
			sn: inputModal13,
			uidnumberchange: activeId
		};

		fetch(scripts_path + "modify_user.php", {
			method: 'POST',
			header: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: JSON.stringify(newPost)
		  })
		  .then (response => response.json())
		  .then (response => {
			console.log(response);
			alert(response);
		  })
		props.setActive(false)
	}
	const [inputModal, setInputModal] = useState(props.studntData[0][0])
	const [inputModal1, setInputModal1] = useState(props.studntData[0][1])
	const [inputModal2, setInputModal2] = useState(props.studntData[0][1])
	const [inputModal3, setInputModal3] = useState(props.studntData[0][3])
	const [inputModal4, setInputModal4] = useState(props.studntData[0][4])
	const [inputModal5, setInputModal5] = useState(props.studntData[0][5])
	const [inputModal6, setInputModal6] = useState(props.studntData[0][6])
	const [inputModal7, setInputModal7] = useState(props.studntData[0][7])
	const [inputModal8, setInputModal8] = useState(props.studntData[0][8])
	const [inputModal9, setInputModal9] = useState(props.studntData[0][9])
	const [inputModal10, setInputModal10] = useState(props.studntData[0][10])
	const [inputModal11, setInputModal11] = useState(props.studntData[0][11])
	const [inputModal12, setInputModal12] = useState(props.studntData[0][12])
	const [inputModal13, setInputModal13] = useState(props.studntData[0][13])
	const [activeId, setActiveId] = useState(props.studntData[0][4])

	useEffect(() => {
			setInputModal(props.studntData[0][0])
			setInputModal1(props.studntData[0][1])
			setInputModal2(props.studntData[0][2])
			setInputModal3(props.studntData[0][3])
			setInputModal4(props.studntData[0][4])
			setInputModal5(props.studntData[0][5])
			setInputModal6(props.studntData[0][6])
			setInputModal7(props.studntData[0][7])
			setInputModal8(props.studntData[0][8])
			setInputModal9(props.studntData[0][9])
			setInputModal10(props.studntData[0][10])
			setInputModal11(props.studntData[0][11])
			setInputModal12(props.studntData[0][12])
			setInputModal13(props.studntData[0][13])
			setActiveId(props.studntData[0][4])
	}, [props.studntData])
	return (
		<div className={props.active ? "modal modal_actived" : "modal"} onClick={() => props.setActive(false)}>
			<div className = 'modal__container' onClick={e => e.stopPropagation()}>
				<input className='input' placeholder ="Введите кодировку" value={inputModal} onChange={(e) => setInputModal(e.target.value)}/>
				<input className='input' placeholder ="Введите имя" value={inputModal1} onChange={(e) => setInputModal1(e.target.value)}/>
				<input className='input' placeholder ="Введите логин" value={inputModal2} onChange={(e) => setInputModal2(e.target.value)}/>
				<input className='input' placeholder ="Введите почту" value={inputModal3} onChange={(e) => setInputModal3(e.target.value)}/>
				<input className='input' placeholder ="Введите id" value={inputModal4} onChange={(e) => setInputModal4(e.target.value)}/>
				<input className='input' placeholder ="Введите ФИО" value={inputModal5} onChange={(e) => setInputModal5(e.target.value)}/>
				<input className='input' placeholder ="Введите инициалы" value={inputModal6} onChange={(e) => setInputModal6(e.target.value)}/>
				<input className='input' placeholder ="Введите /bin/bash" value={inputModal7} onChange={(e) => setInputModal7(e.target.value)}/>
				<input className='input' placeholder ="Введите номер студенческого билета" value={inputModal8} onChange={(e) => setInputModal8(e.target.value)}/>
				<input className='input' placeholder ="Введите название образовательной организации" value={inputModal9} onChange={(e) => setInputModal9(e.target.value)}/>
				<input className='input' placeholder ="Введите имя фамилию на английском языке" value={inputModal10} onChange={(e) => setInputModal10(e.target.value)}/>
				<input className='input' placeholder ="Введите город" value={inputModal11} onChange={(e) => setInputModal11(e.target.value)}/>
				<input className='input' placeholder ="Введите домашнюю директорию" value={inputModal12} onChange={(e) => setInputModal12(e.target.value)}/>
				<input className='input' placeholder ="Введите фамилию" value={inputModal13} onChange={(e) => setInputModal13(e.target.value)}/>
				<button className='button' onClick={change}>Изменить</button>
			</div>
		</div>
	);
};

export default Modal;