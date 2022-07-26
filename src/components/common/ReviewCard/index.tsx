import React from 'react'
import { ReviewDataType } from '../types/ReviewDataTypes'
import styled from 'styled-components'
import StarRating from '../StarRating'
import day from 'dayjs'
import { Link } from 'react-router-dom'
import { Card, Fade, Typography } from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import { UserReviewListContent, AuthorAndDateSubCantainer } from '../StyledComponents'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

type Props = {
  review: ReviewDataType
}

const ReviewCard = ({ review }: Props) => {
  const { id, place, rating, content, author, published_at, hasComment } = review
  return (
    <Fade in={true} 
      style={{ transformOrigin: '0 0 0' }}
      {...{ timeout: Math.random() * 1000 }}
    >
      <CardContainer>
        <LinkWrapper to={`/details/${id}`}>
          <Typography variant={'h6'} sx={{ fontSize: 16, fontWeight: 600 }} color="text.primary">
            {place}
          </Typography>
          <StarRating {...{ rating: rating }} />
          <UserReviewListContent sx={{ fontSize: 13 }} color="text.secondary">
            {content}
          </UserReviewListContent>
          <AuthorAndDateSubCantainer>
            <Typography sx={{ fontSize: 10, textAlign: 'left', width: '50%' }} color="text.primary">{author} </Typography>
            <Typography sx={{ fontSize: 10, textAlign: 'left', width: '50%', color: grey[500] }} >{day(published_at).format('DD/MM/YYYY')}</Typography>
            {hasComment && <QuestionAnswerIcon sx={{ fontSize: 14, textAlign: 'right', color: blue[800] }} />}
          </AuthorAndDateSubCantainer>
        </LinkWrapper>
      </CardContainer>
    </Fade>
  )
}

export default ReviewCard

export const CardContainer = styled(Card)`
  border: 1px; 
  display: inline-flex;
  height: 160px;
  margin: 0;
  padding: 13px;
`

const LinkWrapper = styled(Link)`
  position: relative;
  text-decoration: none;
`
