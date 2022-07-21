import React from 'react'
import { render, screen, act } from '@testing-library/react'
import ReviewDetails from '../index'
import Router from "react-router-dom";

import { MemoryRouter } from 'react-router-dom'
import { mockReviewData, mockReviewCommentData } from '../../common/__mocks__/mockReviews'

const mockId = '5d707203015653f16822ac2f'
const mockDetailData = mockReviewData[9]

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

const setup = async () => {
  render(
    <MemoryRouter initialEntries={[`/details/${mockId}`]}>
      <ReviewDetails />
    </MemoryRouter>
  )
}

describe('ReviewDetails', () => {
  it('should render the component', async () => {
      jest.spyOn(Router, 'useParams').mockReturnValue({ id: mockId })

    // @ts-ignore
    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve({...mockReviewCommentData}),
      };
      return Promise.resolve(fetchResponse);
    });

    // @ts-ignore
    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve({ ...mockDetailData}),
      };
      return Promise.resolve(fetchResponse);
    });

    await act( async () => setup())
      screen.getByText(/Big Johns Burgers/i)
      screen.getByText(/Cillum ad commodo duis eu. In adipisicing irure nisi veniam adipisicing consequat eu amet ut ex cupidatat excepteur pariatur. Ex consectetur culpa non sit. Do esse incididunt non irure. Id cillum sit do nostrud consectetur id in minim cillum. Lorem proident sit consequat labore irure culpa ea tempor labore./i)
      screen.getByText('18/02/2016')
      screen.getAllByText(/Gillespie Lester/i)
      screen.getByText('20/07/2022')
  });
})

