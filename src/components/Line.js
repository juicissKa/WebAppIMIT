import React from 'react';
import { scripts_path } from '../consts.js';

const Line = (props) => {
	const set = () => {
		const newPost = {
			uidnumber: props.info.id,
		  }
		fetch(scripts_path + "get_user.php", {
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
				arrObjects.push(response[i])
			}
			props.setStudntData(arrObjects)
		  })

		props.setModalActive(true);
	}
	return (
			<tr className='line' onDoubleClick={() => set()}>
				<td>{props.info.fio}</td>
				<td>{props.info.id}</td>
				<td>{props.info.login}</td>
				<td>{props.info.group}</td>
			</tr>
	);
};

export default Line;