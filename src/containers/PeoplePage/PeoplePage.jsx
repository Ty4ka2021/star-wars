import PeopleList from '@components/PeoplePage/PeopleList/PeopleList'
import { API_PEOPLE } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getPeopleId, getPeopleImage } from '@services/getPeopleData'
import { getApiResource } from '@utils/network'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

const PeoplePage = ({ setErrorApi }) => {

	const [people, setPeople] = useState(null)


	const getResource = async (url) => {
		const res = await getApiResource(url)

		if (res) {
			const peopleList = res.results.map(({ name, url }) => {
				const id = getPeopleId(url)
				const img = getPeopleImage(id)

				return {
					id,
					name,
					img
				}
			})

			setPeople(peopleList)
			setErrorApi(false)
		} else {
			setErrorApi(true)
		}

	}

	useEffect(() => {
		getResource(API_PEOPLE)
	}, [])



	return (
		<>
			<h2 className='header__text'>Navigation</h2>
			{people &&
				<PeopleList people={people} />
			}
		</>
	)
}

PeoplePage.propTypes = {
	setErrorApi: PropTypes.func
}


export default withErrorApi(PeoplePage)


