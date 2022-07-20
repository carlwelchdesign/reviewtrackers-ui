import React, { useEffect, useState } from 'react'
import { ReviewDataType } from '../common/types/ReviewDataTypes'
import ReviewCard from '../common/ReviewCard'
import { fetchAllReviews } from '../common/api'
import styled from 'styled-components'

const ReviewList = () => {
  const [reviewList, setReviewList] = useState<ReviewDataType[]>([])

  useEffect(() => {
    const fetchAndSetReviews = async () => {
      const data = await fetchAllReviews();
      setReviewList(data);
    }
    fetchAndSetReviews();
   }, []);

  return (
    <React.Suspense fallback="loading...">
      <ListContainer>
        {reviewList.map((review: ReviewDataType) => <ReviewCard key={review.id} {...{review}} />)}
      </ListContainer>
    </React.Suspense>

  )
}

export default ReviewList

const ListContainer = styled.div`
  margin: 0 auto;
  width: 96%;
`
