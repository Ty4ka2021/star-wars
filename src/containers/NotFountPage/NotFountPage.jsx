import React from "react"
import { useLocation } from 'react-router'
import img from './img/NotFoundPage.png'
import s from './NotFountPage.module.css'

const NotFountPage = () => {
	let location = useLocation()
	return (
		<>
			<img className={s.img} src={img} alt="not found" />
			<p className={s.text}>No match for <u>{location.pathname}</u></p>
		</>
	)
}

export default NotFountPage