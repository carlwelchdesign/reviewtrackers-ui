import React, { useEffect, useState } from 'react'
import { ReviewDataType } from '../../constants/types/ReviewDataTypes'
import ReviewCard from '../common/ReviewCard'
import { fetchAllReviews } from '../../api'
import Grid from '@mui/material/Grid';

const ReviewList = () => {
  const [reviewList, setReviewList] = useState<ReviewDataType[]>([])

  useEffect(() => {
    const fetchAndSetReviews = async () => {
      const data = await fetchAllReviews();
      setReviewList(data);
    }
    fetchAndSetReviews();
   }, []);

  return (
    <Grid 
      alignItems="center"
      justifyContent="center" 
      container spacing={{ xs: 3, md: 4 }} 
      columns={{ xs: 1, sm: 8, md: 12, lg: 18}}>
      {reviewList.map((review: ReviewDataType, index: number) => 
        <Grid item xs={2} sm={4} md={4} key={index}>
          <ReviewCard key={review.id} {...{review}} />
        </Grid>
      )}
    </Grid>
  )
}

export default ReviewList


