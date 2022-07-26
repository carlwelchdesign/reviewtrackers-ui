import { apiPath } from "../constants"
import { CommentFormDataTypes } from "../constants/types/ReviewDataTypes"

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
    if (response.ok) {
      return response
    }
		return await response.json()
	} catch (err) {
		console.log('error', err)
	}
}

export const updateReviewComment = async (data: CommentFormDataTypes) => {
	const url = apiPath + `review/comment/${data.id}`
	try {
    const config = {
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(url, config)
    if (response.ok) {
      return response
    }
		return await response.json()
	} catch (err) {
		console.log('error', err)
	}
}

export const deleteReviewComment = async (id: string, reviewId: string) => {
	await fetch(apiPath + `review/comment/${id}/${reviewId}`, {
		method: 'DELETE',
	})
	try {
	} catch (err) {
		console.log('error', err)
	}
}

