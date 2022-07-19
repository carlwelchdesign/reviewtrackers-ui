import React from 'react'
import { render, screen } from '@testing-library/react'
import CommentCard from '../index'
import { mockReviewCommentData } from '../../__mocks__/mockReviews'

const mockHandeleCommentUpdate = () => jest.fn()
const mockHandeleCommentDelete = () => jest.fn()

describe('CommentCard', () => {
	it('Renders CommentCard', async () => {
		render(<CommentCard handeleCommentDelete={mockHandeleCommentUpdate} handeleCommentUpdate={mockHandeleCommentDelete} {...{ review: mockReviewCommentData }} />)
		screen.getByText('19/07/2022')
	})
})