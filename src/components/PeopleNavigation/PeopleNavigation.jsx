import React from "react"
import { Link } from 'react-router-dom'
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
					<button
						onClick={handleChangePrev}
						className={s.button}
						disabled={!prevPage}
					>
						Previous
					</button>
				</Link>
				<Link to={`/people/?page=${counterPage + 1}`}
					className={s.link}
				>
					<button
						onClick={handleChangeNext}
						className={s.button}
						disabled={!nextPage}
					>
						Next
					</button>
				</Link>
			</div>
		</>
	)
}

export default PeopleNavigation