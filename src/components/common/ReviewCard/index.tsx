import * as React from 'react';
import Card from '@mui/material/Card';
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
      <Typography variant={'h6'}>
        {place}
      </Typography>
      <StarRating {...{ rating: rating }} />
      <UserReviewContent>
        {content}
      </UserReviewContent>
      <AuthorAndDateSubCantainer>
        <UsernameAndDateContainer sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>{author} {day(published_at).format('DD/MM/YYYY')}</UsernameAndDateContainer>
      </AuthorAndDateSubCantainer>
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
const UsernameAndDateContainer = styled(Typography)`
  display: relative;
  height: 100%;
`
const AuthorAndDateSubCantainer = styled.div`
  display: absolute;
  bottom: 0px;
`
