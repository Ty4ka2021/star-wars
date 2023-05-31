import { removePersonFromFavorite, setPersonToFavorite } from '@store/actions'
import React from "react"
import { useDispatch } from 'react-redux'
import s from './PersonPhoto.module.css'
import iconFavorite from './img/favorite.svg'
import iconFavoriteFill from './img/favoriteFill.svg'

const PersonPhoto = ({
	personId,
	personPhoto,
	personName,
	personFavorite,
	setPersonFavorite
}) => {
	const dispatch = useDispatch()

	const dispatchFavoritePeople = () => {
		if (personFavorite) {
			dispatch(removePersonFromFavorite(personId))
			setPersonFavorite(false)
		} else {
			dispatch(setPersonToFavorite({
				[personId]: {
					name: personName,
					img: personPhoto
				}
			}))
			setPersonFavorite(true)
		}
	}

	return (
		<>
			<div className={s.container}>
				<img className={s.photo} src={personPhoto} alt={personName} />
				<img
					src={personFavorite ? iconFavoriteFill : iconFavorite}
					onClick={dispatchFavoritePeople}
					className={s.favorite}
					alt="add to favorite"
				/>
			</div>


		</>
	)
}

export default PersonPhoto