import { api } from "../constansts";

export const fetchAllReviews = async () => {
	const response = await fetch(api + 'reviews', {
		method: 'GET',
	});
	try {
			const reviews = await response.json();
			return reviews;
	} catch (err) {
		console.log('error', err);
	}
};

export const fetchOneReview = async (id: string) => {
	const response = await fetch(api + `reviews/${id}`, {
		method: 'GET',
	});
	try {
			const reviews = await response.json();
			return reviews;
	} catch (err) {
		console.log('error', err);
	}
};