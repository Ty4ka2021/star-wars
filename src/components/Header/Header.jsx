import React from "react"
import { NavLink } from 'react-router-dom'
import s from "./Header.module.css"

const Header = () => {
	return (
		<div className={s.container}>
			<ul className={s.list}>
				<li className={s.item}>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/people'>People</NavLink>
				</li>
			</ul>
		</div>
	)
}

export default Header