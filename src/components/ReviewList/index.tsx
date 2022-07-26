import React, { useEffect, useState, Suspense } from 'react'
import { ReviewDataType } from '../common/types/ReviewDataTypes'
import ReviewCard from '../common/ReviewCard'
import { fetchAllReviews } from '../common/api'
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

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
    <Suspense fallback={<CircularProgress />}>
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
    </Suspense>
  )
}

export default ReviewList


