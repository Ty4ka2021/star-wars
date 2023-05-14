import PersonInfo from '@components/PersonPage/PersonInfo/PersonInfo'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack/PersonLinkBack'
import PersonPhoto from '@components/PersonPage/PersonPhoto/PersonPhoto'
import { API_PERSON } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getPeopleImage } from '@services/getPeopleData'
import { getApiResource } from '@utils/network'
import React, { Suspense, useEffect, useState } from "react"
import { useParams } from 'react-router'
import UILoading from '../../components/UI/UILoading/UILoading'
import s from './PersonPage.module.css'

// import PersonFilms from '@components/PersonPage/PersonFilms/PersonFilms'
const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms/PersonFilms'))

const PersonPage = ({ setErrorApi }) => {
	const { userId } = useParams()
	const [personInfo, setPersonInfo] = useState(null)
	const [personName, setPersonName] = useState(null)
	const [personPhoto, setPersonPhoto] = useState(null)
	const [personFilms, setPersonFilms] = useState(null)

	useEffect(() => {
		(async () => {
			const res = await getApiResource(`${API_PERSON}/${userId}`)

			if (res) {
				setPersonInfo([
					{ title: 'Height', data: res.height },
					{ title: 'Mass', data: res.mass },
					{ title: 'Hair Color', data: res.hair_color },
					{ title: 'Skin Color', data: res.skin_color },
					{ title: 'Eye Color', data: res.eye_color },
					{ title: 'Birth Year', data: res.birth_year },
					{ title: 'Gender', data: res.gender },
				])

				setPersonName(res.name)
				setPersonPhoto(getPeopleImage(userId))

				res.films.length && setPersonFilms(res.films)

				setErrorApi(!res)
			}
		})()
	}, [])


	return (
		<>
			<PersonLinkBack />
			<div className={s.PersonPage}>

				<span className={s.name}>{personName}</span>

				<div className={s.container}>
					<PersonPhoto personPhoto={personPhoto} personName={personName} />

					{personInfo && <PersonInfo personInfo={personInfo} />}

					{personFilms && (
						<Suspense fallback={<UILoading />}>
							<PersonFilms personFilms={personFilms} />
						</Suspense>
					)}
				</div>

			</div>
		</>
	)
}

export default withErrorApi(PersonPage)