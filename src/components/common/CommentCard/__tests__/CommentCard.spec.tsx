import React from 'react'
import { render } from '@testing-library/react'
import CommentCard from '../index'
import { mockReviewCommentData } from '../../__mocks__/mockReviews'

const mockHandeleCommentUpdate = () => jest.fn()
const mockhandleModal = () => jest.fn()

describe('CommentCard', () => {
	it('Renders CommentCard', async () => {
		render(<CommentCard handeleCommentDelete={mockHandeleCommentUpdate} handleModal={mockhandleModal} {...{ review: mockReviewCommentData }} />)
	})
})