import React from "react"
import { useNavigate } from 'react-router'
import s from "./PersonLinkBack.module.css"
import icon from './img/left.svg'

const PersonLinkBack = () => {
	const history = useNavigate()
	const handleGoBack = (e) => {
		e.preventDefault()
		history(-1)
	}
	return (
		<>
			<a className={s.link} href="#" onClick={handleGoBack}>
				<img className={s.arrow} src={icon} alt="arrow left" />
				<span>Go back</span>
			</a>
		</>
	)
}

export default PersonLinkBack