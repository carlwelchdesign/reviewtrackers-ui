import React, { useState, useEffect } from 'react'
import { Card, Typography } from '@mui/material'
import { ReviewDataType } from '../types/ReviewDataTypes'
import StarRating from '../StarRating'
import day from 'dayjs'
import { fetchOneReview } from '../api'
import { useParams } from 'react-router-dom'
import { UserReviewContent } from '../StyledComponents'
import grey from '@mui/material/colors/grey'
import styled from 'styled-components'

const ReviewDetails = () => {
  const { id } = useParams()
  const [reviewDetail, setReviewDetail] = useState<ReviewDataType>()

  useEffect(() => {
    if (id) {
      const fetchAndSetReviews = async () => {
        const data = await fetchOneReview(id)
        setReviewDetail(data)
        //  setLoading(false)
      }
    fetchAndSetReviews()
    }
   }, [id])

  return (
    <CardContainer>
      <Typography variant={'h6'} sx={{ fontSize: 16, fontWeight: 600 }} color="text.primary">
        {reviewDetail?.place}
      </Typography>
      <StarRating {...{ rating: reviewDetail?.rating || 0 }} />
      <UserReviewContent sx={{ fontSize: 14}} color="text.secondary">
        {reviewDetail?.content}
      </UserReviewContent>
      <AuthorAndDateSubCantainer>
          <Typography sx={{ fontSize: 10, textAlign: 'left', marginRight: '40px' }} color="text.primary">{reviewDetail?.author} </Typography>
          <Typography sx={{ fontSize: 10, textAlign: 'right', color: grey[500] }} >{day(reviewDetail?.published_at).format('DD/MM/YYYY')}</Typography>
        </AuthorAndDateSubCantainer>
    </CardContainer>
  )
}

export default ReviewDetails

const CardContainer = styled(Card)`
  border: 1px; 
  display: inline-block;
  height: 160px;
  margin: 32px 48px;
  padding: 13px 80px;
  position: relative;
`

const AuthorAndDateSubCantainer = styled.div`
  width: 100%;
  display: inline-flex;
  position: absolute;
  bottom: 13px;
`