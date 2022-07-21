import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import CommentCard from '../index'
import { mockReviewCommentData } from '../../__mocks__/mockReviews'

const mockHandeleCommentUpdate = () => jest.fn()
const mockhandleModal = () => jest.fn()

describe('CommentCard', () => {
	it('Renders CommentCard', async () => {
		waitFor(() => render(<CommentCard handeleCommentDelete={mockHandeleCommentUpdate} handleModal={mockhandleModal} {...{ ...mockReviewCommentData }} />))
		screen.getByText('Only meant to wet my feet!')
		screen.getByText('The Whispers')
		screen.getByText('20/07/2022')
	})
})