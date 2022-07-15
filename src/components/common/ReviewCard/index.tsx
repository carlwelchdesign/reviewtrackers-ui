import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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

  return (
    <RTCard>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {review.place}
        </Typography>
          <StarRating {...{rating: review.rating}} />
        <UserReviewContent variant="body2">
          {review.content}
        </UserReviewContent>
      </CardContent>
      <CardActions>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {review.author} {day(review.published_at).format('DD/MM/YYYY')}
        </Typography>
      </CardActions>
    </RTCard>
  );
}

export default ReviewCard

const RTCard = styled(Card)`
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


