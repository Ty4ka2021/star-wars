import React from "react"
import s from "./PersonInfo.module.css"

const PersonInfo = ({ personInfo }) => {
	return (
		<>
			<div className={s.PersonInfo}>
				<ul className={s.list}>
					{personInfo.map(({ title, data }) => (
						data && (
							<li className={s.item} key={title}>
								<span className={s.title}>{title}</span>: {data}
							</li>
						)
					))}
				</ul>

			</div>
		</>
	)
}

export default PersonInfo