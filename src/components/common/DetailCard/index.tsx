import React from 'react'
import { CommentFormDataTypes, ReviewDataType } from '../types/ReviewDataTypes'
import { Card, IconButton, Typography } from '@mui/material'
import styled from 'styled-components'
import day from 'dayjs'
import { grey } from '@mui/material/colors'
import StarRating from '../StarRating'
import { UserReviewContent, AuthorDateContainer } from '../StyledComponents'
import InsertCommentIcon from '@mui/icons-material/InsertComment';

interface Props {
  reviewDetail: ReviewDataType
  showCommentButton: boolean
  handleModal: () => void
}
  
type DetailProps = CommentFormDataTypes & Props

const DetailCard = ({reviewDetail, showCommentButton, handleModal }: DetailProps) => {
  return (
    <ReviewCardDetailContainer>
      <Typography variant={'h6'} sx={{ fontSize: 16, fontWeight: 600 }} color="text.primary">
        {reviewDetail?.place}
      </Typography>
      <StarRating {...{ rating: reviewDetail?.rating || 0 }} />
      <UserReviewContent sx={{ fontSize: 13}} color="text.secondary">
        {reviewDetail?.content}
      </UserReviewContent>
      <AuthorDateContainer>
        <Typography sx={{ fontSize: 10, textAlign: 'left', marginRight: '40px' }} color="text.primary">{reviewDetail?.author}</Typography>
        <Typography sx={{ fontSize: 10, textAlign: 'right', color: grey[500] }}>{day(reviewDetail?.published_at).format('DD/MM/YYYY')}</Typography>
      </AuthorDateContainer>
      {showCommentButton && <AddCommentButton color="primary" aria-label="Add Comment" onClick={handleModal}>
        <InsertCommentIcon sx={{ fontSize: 16, color: grey[800]}}/>
      </AddCommentButton>}
    </ReviewCardDetailContainer>
  )
}

export default DetailCard

const ReviewCardDetailContainer = styled(Card)`
  border: 1px; 
  display: flex;
  min-height: 160px;
  margin: 32px 48px;
  padding: 13px 80px;
  position: relative;
  flex-direction: column;
`
const AddCommentButton = styled(IconButton)`
  position: absolute !important;
  right: 80px;
  bottom: 0px;
`