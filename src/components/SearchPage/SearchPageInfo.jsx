import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import s from './SearchPageInfo.module.css'

const SearchPageInfo = ({ people }) => (
	<>
		{people.length
			? (
				<ul className={s.list}>
					{people.map(({ id, name, img }) =>
						<li className={s.item} key={id}>
							<Link to={`/people/${id}`}>
								<img className={s.photo} src={img} alt={name} />
								<p className={s.name}>{name}</p>
							</Link>
						</li>
					)}
				</ul>
			)
			: <h2 className={s.comment}>No results</h2>
		}
	</>
)

SearchPageInfo.propTypes = {
	people: PropTypes.array,
}

export default SearchPageInfo