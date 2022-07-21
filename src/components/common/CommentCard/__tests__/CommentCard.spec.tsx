import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import CommentCard from '../index'
import { mockReviewCommentData } from '../../__mocks__/mockReviews'
import userEvent from '@testing-library/user-event'

const mockHandeleCommentUpdate = () => jest.fn()
const mockhandleModal = () => jest.fn()

describe('CommentCard', () => {
	it('Renders CommentCard', async () => {
		// When I load the COmment Card
		waitFor(() => render(<CommentCard handeleCommentDelete={mockHandeleCommentUpdate} handleModal={mockhandleModal} {...{ ...mockReviewCommentData }} />))
		// I see the data
		screen.getByText('Only meant to wet my feet!')
		screen.getByText('The Whispers')
		screen.getByText('20/07/2022')
		
		// I see the icons
		screen.getByTestId('ReplyIcon')

		// And when I click the menu
		const commentMenu = screen.getByTestId('MoreHorizIcon')
		userEvent.click(commentMenu)

		// I see the options
		screen.getByText('Update')
		screen.getByText('Delete')
		screen.debug()
	})
})