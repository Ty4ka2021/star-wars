import PeopleList from '@components/PeoplePage/PeopleList/PeopleList'
import React, { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import s from './FavoritesPage.module.css'

const FavoritesPage = () => {
	const [people, setPeople] = useState([])

	const storeDate = useSelector(state => state.favoriteReducer)

	useEffect(() => {
		const arr = Object.entries(storeDate)

		if (arr.length) {
			const res = arr.map(item => {
				return {
					id: item[0],
					// name: item[1].name,
					// img: item[1].img,
					...item[1]
				}
			})

			setPeople(res)
		}
	}, [])
	return (
		<>
			<h1 className="header__text">FavoritesPage</h1>
			{people.length
				? <PeopleList people={people} />
				: <h2 className={s.comment}>No data</h2>
			}

		</>
	)
}

export default FavoritesPage