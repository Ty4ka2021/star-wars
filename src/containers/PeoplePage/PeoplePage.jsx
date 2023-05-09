import PeopleList from '@components/PeoplePage/PeopleList/PeopleList'
import { API_PEOPLE } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { useQueryParams } from '@hooks/useQueryParams'
import { getPeopleId, getPeopleImage } from '@services/getPeopleData'
import { getApiResource } from '@utils/network'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

const PeoplePage = ({ setErrorApi }) => {

	const [people, setPeople] = useState(null)
	const [prevPage, setPrevPage] = useState(null)
	const [nextPage, setNextPage] = useState(null)

	const query = useQueryParams()
	const queryPage = query.get('page')

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
			setPrevPage(res.previous)
			setNextPage(res.next)
			setErrorApi(false)
		} else {
			setErrorApi(true)
		}

	}

	useEffect(() => {
		getResource(API_PEOPLE + queryPage)
	}, [queryPage])



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


