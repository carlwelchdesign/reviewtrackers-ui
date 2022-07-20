import React from 'react'
import { render, screen } from '@testing-library/react'
import CommentMenu from '../index'
import UserEvent from '@testing-library/user-event'

const mockHandleCommentMenu = () => jest.fn()

describe('CommentMenu', () => {
	it('Renders CommentMenu', async () => {
		render(<CommentMenu {...{ handleCommentMenu: mockHandleCommentMenu }} />)
		const menuButton = screen.getByTestId(/MoreHorizIcon/i)
    UserEvent.click(menuButton)
    screen.getByText('Update')
    screen.getByText('Delete')
	})
})