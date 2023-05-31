import React, { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import s from "./Favorite.module.css"
import favoriteSVG from './img/favorite.svg'

const Favorite = () => {
	const [count, setCount] = useState()
	const storeDate = useSelector(state => state.favoriteReducer)

	useEffect(() => {
		const length = Object.keys(storeDate).length
		length.toString().length > 2 ? setCount('...') : setCount(length)

	})
	return (
		<>
			<div className={s.Favorite}>
				<Link to="/favorites">
					<span className={s.counter}>{count}</span>
					<img className={s.icon} src={favoriteSVG} alt="" />
				</Link>
			</div>
		</>
	)
}

export default Favorite