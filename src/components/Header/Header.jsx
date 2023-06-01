import React, { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import Favorite from '../Favorite/Favorite'
import s from "./Header.module.css"

import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme } from '../../context/ThemeProvider'
import dark from './img/dark.png'
import light from './img/light.png'
import neitral from './img/neitral.png'

const Header = () => {
	const [icon, setIcon] = useState(neitral)
	const isTheme = useTheme()

	useEffect(() => {
		switch (isTheme.theme) {
			case THEME_LIGHT:
				setIcon(light)
				break
			case THEME_DARK:
				setIcon(dark)
				break
			case THEME_NEITRAL:
				setIcon(neitral)
				break

			default:
				break
		}

	}, [isTheme])

	return (
		<div className={s.container}>

			<img className={s.icon} src={icon} alt="Star Wars" />

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