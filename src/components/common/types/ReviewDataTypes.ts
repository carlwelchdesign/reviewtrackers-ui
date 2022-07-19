export type ReviewDataType = {
	id: string
	author: string
	place: string
	published_at: string
	rating: number
	content: string
}

export type CommentFormDataTypes = {
	author?: string
	comment?: string
  id?: string
  review_id?: string
  updatedAt?: string
}
