export type ReviewDataType = {
	id: string
	author: string
	place: string
	published_at: string
	rating: number
	content: string
	hasComment?: number
}

export type CommentFormDataTypes = {
	id?: number
	author?: string
	comment?: string
	review_id?: string
	updatedAt?: string
}
