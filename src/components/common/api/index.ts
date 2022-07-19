import { apiPath } from "../constants"
import { CommentFormDataTypes } from "../types/ReviewDataTypes"

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

export const fetchReviewComment = async (id: string) => {
	const response = await fetch(apiPath + `review/comment/${id}`, {
		method: 'GET',
	})
	try {
		return await response.json()
	} catch (err) {
		console.log('error', err)
	}
}

export const postReviewComment = async (data: CommentFormDataTypes) => {
	const url = apiPath + 'review/comment/'
	try {
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, config)
    //const json = await response.json()
    if (response.ok) {
        //return json
        return response
    }
		return await response.json()
	} catch (err) {
		console.log('error', err)
	}
}