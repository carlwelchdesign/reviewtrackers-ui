import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { ReviewDataType } from '../types/ReviewDataTypes';
import styled from 'styled-components';
import StarRating from '../StarRating';
import day from 'dayjs'
import { fetchOneReview } from '../api';
import { useParams } from 'react-router-dom';

// type Props = {
//   review: ReviewDataType
// }

const ReviewDetails = () => {
  const { id } = useParams();
  const [reviewDetail, setReviewDetail] = useState<ReviewDataType>()

  useEffect(() => {
    if (id) {
    const fetchAndSetReviews = async () => {
      const data = await fetchOneReview(id);
      setReviewDetail(data);
      //  setLoading(false);
    }
    fetchAndSetReviews();
    }
   }, [id]);

  return (
    <CardContainer>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {reviewDetail?.place}
      </Typography>
      <StarRating {...{ rating: reviewDetail?.rating || 0 }} />
      <UserReviewContent sx={{ fontSize: 13 }} >
        {reviewDetail?.content}
      </UserReviewContent>
      <UsernameAndDate sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
        {reviewDetail?.author} {day(reviewDetail?.published_at).format('DD/MM/YYYY')}
      </UsernameAndDate>
    </CardContainer>
  )
}

export default ReviewDetails

const CardContainer = styled(Card)`
  border: 1px; 
  display: inline-block;
  height: 160px;
  margin: 32px 48px;
  padding: 13px;
`
const UserReviewContent = styled(Typography)`
  padding-top: 7px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
const UsernameAndDate = styled(Typography)`

`
