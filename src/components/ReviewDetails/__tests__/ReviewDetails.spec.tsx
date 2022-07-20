import React from 'react'
import { render, screen } from '@testing-library/react'
import ReviewDetails from '../index'
import { BrowserRouter } from 'react-router-dom'
import { mockReviewData } from '../../common/__mocks__/mockReviews'
import { createMemoryHistory } from 'history';
import fetchMock from 'fetch-mock'

const mockId = '5d707203015653f16822ac2f'
const mockDetailData = mockReviewData.filter(review=>{
  review.id === mockId
})

fetchMock.post(`localhost:3000/details/${mockId}`, {
  body: mockDetailData
})

describe('ReviewDetails', () => {
  it('should render the component', () => {
    const history = createMemoryHistory();
    const route = `/details/${mockId}`;
    history.push(route);
    render(<ReviewDetails />, {wrapper: BrowserRouter})
    expect(screen.getByTestId(/ArrowBackIosIcon/i)).toBeInTheDocument()
  });
})