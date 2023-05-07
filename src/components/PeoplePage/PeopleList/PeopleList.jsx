import PropTypes from 'prop-types'
import React from "react"
import s from './PeopleList.module.css'

const PeopleList = ({ people }) => {
	return (
		<ul className={s.list}>
			{people.map(({ id, name, img }) =>
				<li className={s.item} key={id}>
					<a href="#">
						<img className={s.image} src={img} alt={name} />
						<p>{name}</p>
					</a>
				</li>
			)}
		</ul>
	)
}

PeopleList.propTypes = {
	people: PropTypes.array
}

export default PeopleList