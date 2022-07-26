import React from 'react'
import { CommentFormDataTypes, ReviewDataType } from '../../../constants/types/ReviewDataTypes'
import { Card, IconButton, Tooltip, Typography, Fade } from '@mui/material'
import styled from 'styled-components'
import day from 'dayjs'
import { blue, grey } from '@mui/material/colors'
import StarRating from '../StarRating'
import { UserReviewContent, AuthorDateContainer } from '../StyledComponents'
import InsertCommentIcon from '@mui/icons-material/InsertComment';

interface Props {
  reviewDetail: ReviewDataType
  showCommentButton: boolean
  handleModal: () => void
}

type DetailProps = CommentFormDataTypes & Props

const DetailCard = ({ reviewDetail, showCommentButton, handleModal }: DetailProps) => {
  const { place, rating, content, author, published_at } = reviewDetail
  return (
    <Fade in={true}
      style={{ transformOrigin: '0 0 0' }}
      {...{ timeout: 500 }}
    >
      <ReviewCardDetailContainer>
        <Typography variant={'h6'} sx={{ fontSize: 16, fontWeight: 600 }} color="text.primary">
          {place}
        </Typography>
        <StarRating {...{ rating: rating || 0 }} />
        <UserReviewContent sx={{ fontSize: 13 }} color="text.secondary">
          {content}
        </UserReviewContent>
        <AuthorDateContainer>
          <Typography sx={{ fontSize: 10, textAlign: 'left', marginRight: '40px' }} color="text.primary">{author}</Typography>
          <Typography sx={{ fontSize: 10, textAlign: 'right', color: grey[500] }}>{day(published_at).format('DD/MM/YYYY')}</Typography>
        </AuthorDateContainer>
        {showCommentButton && <AddCommentButton color="primary" aria-label="Add Comment" onClick={handleModal}>
          <Tooltip placement="top" title="Add Comment">
            <InsertCommentIcon sx={{ fontSize: 16, color: blue[800] }} />
          </Tooltip>
        </AddCommentButton>}
      </ReviewCardDetailContainer>
    </Fade>
  )
}

export default DetailCard

const ReviewCardDetailContainer = styled(Card)`
  border: 1px; 
  display: flex;
  min-height: 160px;
  margin: 0 0 24px;
  padding: 13px 80px;
  position: relative;
  flex-direction: column;
`
const AddCommentButton = styled(IconButton)`
  position: absolute !important;
  right: 80px;
  bottom: 0px;
`