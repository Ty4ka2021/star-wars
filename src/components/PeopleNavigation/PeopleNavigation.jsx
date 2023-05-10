import React from "react"
import { Link } from 'react-router-dom'
import UIButton from '../UI/UIButton/UIButton'
import s from "./PeopleNavigation.module.css"

const PeopleNavigation = ({
	getResource, prevPage, nextPage, counterPage
}) => {

	const handleChangeNext = () => getResource(nextPage)
	const handleChangePrev = () => getResource(prevPage)

	return (
		<>
			<div className={s.PeopleNavigation}>
				<Link to={`/people/?page=${counterPage - 1}`}
					className={s.link}
				>
					<UIButton
						text='Previous'
						onClick={handleChangePrev}
						disabled={!prevPage}
					/>
				</Link>
				<Link to={`/people/?page=${counterPage + 1}`}
					className={s.link}
				>
					<UIButton
						text='Next'
						onClick={handleChangeNext}
						disabled={!nextPage}
					/>
				</Link>
			</div>
		</>
	)
}

export default PeopleNavigation