import React from "react"
import { NavLink } from 'react-router-dom'
import Favorite from '../Favorite/Favorite'
import s from "./Header.module.css"

const Header = () => {
	return (
		<div className={s.container}>
			<ul className={s.list}>
				<li className={s.item}>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/people?page=1'>People</NavLink>
				</li>
				<li>
					<NavLink to='/not-found'>Not Found</NavLink>
				</li>
			</ul>

			<Favorite />
		</div>
	)
}

export default Header