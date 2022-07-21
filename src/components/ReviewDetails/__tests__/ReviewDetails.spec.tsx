import React from 'react'
import { render, screen, act } from '@testing-library/react'
import ReviewDetails from '../index'
import { BrowserRouter } from 'react-router-dom'
import { mockReviewData, mockReviewCommentData } from '../../common/__mocks__/mockReviews'
import fetchMock from 'fetch-mock'

const mockId = '5d707203015653f16822ac2f'
const mockDetailData = mockReviewData[9]

fetchMock.get(`http://localhost:8080/reviews/${mockId}`, {
  headers: {
		['Content-Type']: 'application/json'
  },
  response: {
		status: 200,
		body: {...mockDetailData}
	}
})

fetchMock.get(`http://localhost:8080/review/comment/${mockId}`, {
  response: {
		status: 200,
		body: {...mockReviewCommentData}
	}
})


const setup = async () => {
	render(<ReviewDetails />, {wrapper: BrowserRouter})
}


describe('ReviewDetails', () => {
  it('should render the component', async () => {

    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
      useParams: () => ({
        id: mockId
      }),
      useRouteMatch: () => ({ url: `/details/${mockId}` }),
    }));

    const setReviewDetailMock = jest.fn()
		const reviewDetailMock: any = (useState :any) => [useState, setReviewDetailMock];
		jest.spyOn(React, 'useState').mockImplementation(reviewDetailMock)
 
    const setReviewCommentMock = jest.fn()
		const reviewCommentMock: any = (useState :any) => [useState, setReviewCommentMock];
    jest.spyOn(React, 'useState').mockImplementation(reviewCommentMock)
		
    // @ts-ignore
    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve({...mockDetailData}),
      };
      return Promise.resolve(fetchResponse);
    });

    // @ts-ignore
    jest.spyOn(window, "fetch").mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve({...mockReviewCommentData}),
      };
      return Promise.resolve(fetchResponse);
    });

		await act( async () => setup());

    fetchMock.done()
    fetchMock.lastCall()
    screen.debug()
    // await waitForElementToBeRemoved(()=> {
    //   expect(screen.findAllByText(/loading.../i)).toBeTruthy()
    // })

  });
})

