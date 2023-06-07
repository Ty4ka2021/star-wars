import { API_SEARCH } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getPeopleId, getPeopleImage } from '@services/getPeopleData'
import { getApiResource } from '@utils/network'
import { debounce } from 'lodash'
import React, { useCallback, useEffect, useState } from "react"
import SearchPageInfo from '../../components/SearchPage/SearchPageInfo'
import UIInput from '../../components/UI/UIInput/UIInput'
import s from "./SearchPage.module.css"

const SearchPage = ({ setErrorApi }) => {
	const [inputSearchValue, setInputSearchValue] = useState('')
	const [people, setPeople] = useState([])

	const getResponse = async param => {
		const res = await getApiResource(API_SEARCH + param)

		if (res) {
			const peopleList = res.results.map(({ name, url }) => {
				const id = getPeopleId(url)
				const img = getPeopleImage(id)
				return {
					id: id,
					name: name,
					img: img
				}
			})
			setPeople(peopleList)
			setErrorApi(false)

		} else {
			setErrorApi(true)
		}
	}

	useEffect(() => {
		getResponse('')
	}, [])

	const debouncedGetResponse = useCallback(
		debounce(value => getResponse(value), 500), []
	)

	const handleInputChange = (value) => {
		setInputSearchValue(value)
		debouncedGetResponse(value)
	}

	return (
		<>
			<h1 className='header__text'>SearchPage</h1>
			<UIInput
				value={inputSearchValue}
				handleInputChange={handleInputChange}
				placeholder="Input characters's name"
				classes={s.search} />
			<SearchPageInfo people={people} />
		</>
	)
}

export default withErrorApi(SearchPage)