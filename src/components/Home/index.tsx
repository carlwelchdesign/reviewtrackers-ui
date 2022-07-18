import React, { useEffect, useState } from 'react'
import ReviewList from '../ReviewList'
import { ReviewDataType } from '../common/types/ReviewDataTypes'
import { fetchAllReviews } from '../common/api'

const Home = () => {
  const [reviewList, setReviewList] = useState<ReviewDataType[]>([])

  useEffect(() => {
    const fetchAndSetReviews = async () => {
      const data = await fetchAllReviews();
      setReviewList(data);
      //  setLoading(false);
    }
    fetchAndSetReviews();
   }, []);

  return (
    <ReviewList {...{reviewList}} />
  )
}

export default Home


