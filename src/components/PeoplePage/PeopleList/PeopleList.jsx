import PropTypes from 'prop-types'
import React from "react"
import { Link } from 'react-router-dom'
import s from './PeopleList.module.css'

const PeopleList = ({ people }) => {
	return (
		<ul className={s.list}>
			{people.map(({ id, name, img }) =>
				<li className={s.item} key={id}>
					<Link to={`/people/${id}`}>
						<img className={s.image} src={img} alt={name} />
						<p>{name}</p>
					</Link>

				</li>
			)
			}
		</ul >
	)
}

PeopleList.propTypes = {
	people: PropTypes.array
}

export default PeopleList