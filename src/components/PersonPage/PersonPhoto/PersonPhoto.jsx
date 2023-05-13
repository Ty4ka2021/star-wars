import React from "react"
import s from './PersonPhoto.module.css'

const PersonPhoto = ({ personPhoto, personName }) => {
	return (
		<>
			<div className={s.container}>
				<img className={s.photo} src={personPhoto} alt={personName} />
			</div>
		</>
	)
}

export default PersonPhoto