import React from 'react'
import { render, screen, waitFor, act } from '@testing-library/react'
import ReviewDetails from '../index'
import { BrowserRouter } from 'react-router-dom'
import { mockReviewData } from '../../common/__mocks__/mockReviews'
import { createMemoryHistory } from 'history';
import fetchMock from 'fetch-mock'

const mockId = '5d707203015653f16822ac2f'
const mockDetailData = mockReviewData[9]

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => { id : mockId },
}));

fetchMock.get(`localhost:8080/details/${mockId}`, {
  headers: {
		['Content-Type']: 'application/json'
  },
  response: {
		status: 200,
		body: {...mockDetailData}
	}
})

const setup = async () => {
	render(<ReviewDetails />)
}

describe('ReviewDetails', () => {
  it('should render the component', async () => {
    const history = createMemoryHistory();
    const route = `/details/${mockId}`;
    history.push(route);
    jest.fn((() => {
      return {
        data: mockDetailData,
      };
    }))

    // @ts-ignore
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
      useParams: () => ({
        id: mockId
      }),
      useRouteMatch: () => ({ url: `/details/${mockId}` }),
    }));

		await act( async () => setup());

    fetchMock.done()
    fetchMock.lastCall()
    await waitFor(()=> {
      expect(screen.findAllByText(/Big Johns Burgers/i)).toBeInTheDocument()
    })
    // screen.getByText(/Big Johns Burgers/i)
    screen.debug()
  });
})

