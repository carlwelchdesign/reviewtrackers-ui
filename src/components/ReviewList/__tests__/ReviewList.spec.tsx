import React from 'react'
import { render, screen } from '@testing-library/react'
import ReviewList from '../index'

describe('ReviewList', () => {
	it('Renders ReviewList', async () => {
		render(<ReviewList />)
        // I Should see the list
		screen.queryByText(/Big Johns Burgers/i)
		screen.queryByText(/Soup du Jour/i)
		screen.queryByText(/Luckys/i)
	})
})