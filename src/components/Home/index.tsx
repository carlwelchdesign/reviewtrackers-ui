import React, { useState } from 'react'
import ReviewList from '../ReviewList'
import { mockReviewData } from '../common/__mocks__/mockReviews'
import { ReviewDataType } from '../common/types/ReviewDataTypes'


const Home = () => {
  const [reviewList, ] = useState<ReviewDataType[]>(mockReviewData)

  return (
    <ReviewList {...{reviewList}} />
  )
}

export default Home


