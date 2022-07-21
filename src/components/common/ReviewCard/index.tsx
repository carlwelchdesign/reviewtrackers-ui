import * as React from 'react'
import { ReviewDataType } from '../types/ReviewDataTypes'
import styled from 'styled-components'
import StarRating from '../StarRating'
import day from 'dayjs'
import { Link } from 'react-router-dom'
import { Card, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { UserReviewListContent, AuthorAndDateSubCantainer } from '../StyledComponents'

type Props = {
  review: ReviewDataType
}

const ReviewCard = ({review}: Props) => {
  const { id, place, rating, content, author, published_at } = review
  return (
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
          <Typography sx={{ fontSize: 10, textAlign: 'left', width: '50%'}} color="text.primary">{author} </Typography>
          <Typography sx={{ fontSize: 10, textAlign: 'right', width: '50%', color: grey[500] }} >{day(published_at).format('DD/MM/YYYY')}</Typography>
        </AuthorAndDateSubCantainer>
      </LinkWrapper>
    </CardContainer>
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
