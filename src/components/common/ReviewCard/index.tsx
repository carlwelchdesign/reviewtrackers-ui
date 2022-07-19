import * as React from 'react'
import { ReviewDataType } from '../types/ReviewDataTypes'
import styled from 'styled-components'
import StarRating from '../StarRating'
import day from 'dayjs'
import { Link } from 'react-router-dom'
import { Card, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { UserReviewListContent, AuthorAndDateSubCantainer } from '../StyledComponents'
// import ForumIcon from '@mui/icons-material/Forum'
// import {BrowserRouter as Router} from 'react-router-dom';

type Props = {
  review: ReviewDataType
}

const ReviewCard = ({review}: Props) => {
  const { id, place, rating, content, author, published_at } = review
  return (
    // <Router>
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
    // </Router>
  )
}

export default ReviewCard

export const CardContainer = styled(Card)`
  border: 1px; 
  width: 192px;
  display: inline-flex;
  max-width: 192px;
  height: 160px;
  margin: 32px 4%;
  padding: 13px;
`

const LinkWrapper = styled(Link)`
  position: relative;
  text-decoration: none;
`
