import React from 'react'
import ReviewCard from '../common/ReviewCard'
import { ReviewDataType } from '../common/types/ReviewDataTypes'

type Props = {
  reviewList: ReviewDataType[]
}

const ReviewList = ({reviewList}: Props) => {

  return (
    <>
    <div>{reviewList.map((review: ReviewDataType) => <ReviewCard key={review.id} {...{review}} />)}</div>
    </>
  )
}

export default ReviewList


