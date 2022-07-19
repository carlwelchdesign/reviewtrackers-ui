import React from 'react'
import { render, screen } from '@testing-library/react'
import ReviewCard from '../index'
import { mockReviewData } from '../../__mocks__/mockReviews'
import { BrowserRouter } from 'react-router-dom'

const mockCardData = mockReviewData[0]

describe('ReviewCard', () => {
	it('Display ReviewCard', async () => {
		render(<ReviewCard {...{ review: mockCardData }} />, {wrapper: BrowserRouter})
		screen.getByText(mockCardData.place)
		screen.getByText(/Ipsum mollit anim pariatur eu qui velit Lorem ea enim excepteur ut fugiat fugiat esse. Incididun/i)
		screen.getByText(/Weeks Duran/i)
		screen.getByText(/27\/06\/1974/i)
	})
})