import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { ReviewDataType } from '../types/ReviewDataTypes';
import styled from 'styled-components';
import StarRating from '../StarRating';
import day from 'dayjs'

type Props = {
  review: ReviewDataType
}

const ReviewCard = ({review}: Props) => {
  const { place, rating, content, author, published_at } = review
  return (
    <CardContainer>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {place}
        </Typography>
          <StarRating {...{rating: rating}} />
        <UserReviewContent  >
          {content}
        </UserReviewContent>
      </CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {author} {day(published_at).format('DD/MM/YYYY')}
        </Typography>
    </CardContainer>
  )
}

export default ReviewCard

const CardContainer = styled(Card)`
border: 1px; 
width: 192px;
display: inline-block;
max-width: 192px;
height: 160px;
margin: 32px 48px;
`
const UserReviewContent = styled(Typography)`
display: block;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`


