import React from 'react'
import styled from 'styled-components'
import ReviewCard from '../common/ReviewCard'
import { ReviewDataType } from '../common/types/ReviewDataTypes'

type Props = {
  reviewList: ReviewDataType[]
}

const ReviewList = ({reviewList}: Props) => (
  <ListContainer>{reviewList.map((review: ReviewDataType) => <ReviewCard key={review.id} {...{review}} />)}</ListContainer>
)

export default ReviewList

const ListContainer = styled.div`
`
