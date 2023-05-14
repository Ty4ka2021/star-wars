import React, { useEffect, useState } from "react"
import { changeHTTP, makeConcurrentRequest } from '../../../utils/network'
import s from "./PersonFilms.module.css"

const PersonFilms = ({ personFilms }) => {
	const [filmsName, setFilmsName] = useState([])

	useEffect(() => {
		(async () => {
			const filmsHTTPS = personFilms.map(url => changeHTTP(url))
			const response = await makeConcurrentRequest(filmsHTTPS)

			setFilmsName(response)
		})()
	}, [])

	return (
		<>
			<div className={s.PersonFilms}>
				<ul className={s.list}>
					{filmsName
						.sort((a, b) => a.episode_id - b.episode_id)
						.map(({ title, episode_id }) =>
							<li className={s.item} key={episode_id}>
								<span className={s.episode}>Episode {episode_id}</span>
								<span className={s.colon}>: </span>
								<span className={s.title}>{title}</span>
							</li>
						)}
				</ul>
			</div>
		</>
	)
}


export default PersonFilms