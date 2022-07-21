import React from 'react'
import { render, screen, act } from '@testing-library/react'
import ReviewList from '../index'
import { mockReviewData } from '../../common/__mocks__/mockReviews'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

const setup = async () => {
	render(<ReviewList />, {wrapper: BrowserRouter})
}

describe('ReviewList', () => {
	it('Renders ReviewList', async () => {
		// @ts-ignore
		jest.spyOn(window, "fetch").mockImplementationOnce(() => {
			const fetchResponse = {
				json: () => Promise.resolve(mockReviewData),
			};
			return Promise.resolve(fetchResponse);
		});

		// When I load the page
		await act( async () => setup());

		// I see the Review list
		screen.queryByText(/Big Johns Burgersr/i)
		screen.queryByText(/Ipsum mollit anim pariatur eu qui velit Lorem ea enim excepteur ut fugiat fugiat esse. Incididunt consectetur deserunt pariatur magna sit dolore voluptate. Minim cupidatat fugiat magna quis consectetur esse id esse adipisicing anim velit. Cillum mollit et nisi ex occaecat labore enim nulla cupidatat. Occaecat Lorem officia est sit enim amet commodo sunt occaecat reprehenderit Lorem culpa. Aute anim ullamco voluptate incididunt incididunt excepteur in irure./i)
		screen.queryByText(/Weeks Duran/i)
		screen.queryByText('27/06/1974')

		screen.queryAllByText(/Soup du Jour/i)
		screen.queryAllByText(/Sunt sit velit id esse et. Qui Lorem ipsum exercitation nostrud exercitation aute ex cillum pariatur do enim. Irure adipisicing laboris officia est culpa culpa et exercitation id esse enim dolore reprehenderit tempor./i)
		screen.queryAllByText(/Cecelia Blake/i)
		screen.queryAllByText(/Lacey Grimes/i)
		screen.queryAllByText(/Ophelia Rivas/i)
		screen.queryAllByText(/Ice Scream/i)
		screen.queryAllByText(/Graham Hoover/i)
	})
})