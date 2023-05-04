export const SWAPI_ROOT = 'https://swapi.dev/api/'
export const SWAPI_PEOPLE = 'people'

export const getApiResource = async (url) => {
	/*	const res = await fetch(url)
		// const body = await res.json()
		return await res.json()
		// await для того щоб функція асинхронна дочекалась відповіді і виконалась
	*/




	// для того щоб ловити помилки 
	try {
		const res = await fetch(url)

		if (!res.ok) {
			console.error('Could not fetch.', res.status)
			return false
		}
		return await res.json()
	} catch (error) {
		console.error('Could not fetch.', error.message)
		return false
	}
}



// самовизивна асинхронна функція
(async () => {
	const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
	console.log(body)
})()

