import React from 'react'
import { render, screen } from '@testing-library/react'
import NavBar from '../index'

describe('NavBar', () => {
	it('Renders NavBar', async () => {
		render(<NavBar />)
		screen.getByText(/Reviews/i)
	})
})