import React from 'react'
import { render, screen, act } from '@testing-library/react'
import ReviewList from '../index'
import fetchMock from 'fetch-mock'
import { mockReviewData } from '../../common/__mocks__/mockReviews'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

fetchMock.get(`http://localhost:8080/reviews`, {
	headers: {
		['Content-Type']: 'application/json'
  },
  response: {
		status: 200,
		body: mockReviewData
	}
})

const setup = async () => {
	render(<ReviewList />, {wrapper: BrowserRouter})
}

describe('ReviewList', () => {
	it('Renders ReviewList', async () => {
		
		const setReviewListMock = jest.fn()
		const reviewListMock: any = (useState :any) => [useState, setReviewListMock];
		jest.spyOn(React, 'useState').mockImplementation(reviewListMock)
		jest.spyOn(React, 'useEffect').mockImplementation((f) => f())
		// @ts-ignore
		jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(mockReviewData),
      };
      return Promise.resolve(fetchResponse);
    });

		await act( async () => setup());

		screen.queryByText(/Big Johns Burgersr/i)
		screen.queryByText(/Ipsum mollit anim pariatur eu qui velit Lorem ea enim excepteur ut fugiat fugiat esse. Incididunt consectetur deserunt pariatur magna sit dolore voluptate. Minim cupidatat fugiat magna quis consectetur esse id esse adipisicing anim velit. Cillum mollit et nisi ex occaecat labore enim nulla cupidatat. Occaecat Lorem officia est sit enim amet commodo sunt occaecat reprehenderit Lorem culpa. Aute anim ullamco voluptate incididunt incididunt excepteur in irure./i)
		screen.queryByText(/Weeks Duran/i)
		screen.queryByText('27/06/1974')
	})
})