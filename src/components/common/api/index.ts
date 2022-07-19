import { apiPath } from "../constants"

export const fetchAllReviews = async () => {
	const response = await fetch(apiPath + 'reviews', {
		method: 'GET',
	})
	try {
		return await response.json()
	} catch (err) {
		console.log('error', err)
	}
}

export const fetchOneReview = async (id: string) => {
	const response = await fetch(apiPath + `reviews/${id}`, {
		method: 'GET',
	})
	try {
		return await response.json()
	} catch (err) {
		console.log('error', err)
	}
}