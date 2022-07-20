import React from 'react'
import { render, screen } from '@testing-library/react'
import DetailCard from '../index'
import { mockReviewData } from '../../__mocks__/mockReviews'

const mockhandleModal = () => jest.fn()

describe('DetailCard', () => {
	it('Renders DetailCard', async () => {
		render(<DetailCard  {...{ reviewDetail: mockReviewData[0], showCommentButton: true , handleModal: mockhandleModal }} />)
		screen.getByText(/Big Johns Burgers/i)
		screen.getByText(/Weeks Duran/i)
    screen.getByTestId(/InsertCommentIcon/i)
	})
})