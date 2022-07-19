import React, { useState, useEffect } from 'react'
import { Card, IconButton, Typography } from '@mui/material'
import { CommentFormDataTypes, ReviewDataType } from '../common/types/ReviewDataTypes'
import StarRating from '../common/StarRating'
import day from 'dayjs'
import { deleteReviewComment, fetchOneReview, fetchReviewComment, postReviewComment, updateReviewComment } from '../common/api'
import { Link, useParams } from 'react-router-dom'
import grey from '@mui/material/colors/grey'
import styled from 'styled-components'
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import ContentModal from '../common/CommentModal'
import { AuthorDateContainer, UserReviewContent } from '../common/StyledComponents'
import CommentCard from '../common/CommentCard'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ReviewDetails = () => {
  const { id } = useParams()

  const [reviewDetail, setReviewDetail] = useState<ReviewDataType>()
  const [reviewComment, setReviewComment] = useState<CommentFormDataTypes | undefined>()
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if (id) {
      const fetchReview = async () => {
        const data = await fetchOneReview(id)
        setReviewDetail(data)
      }
    fetchReview()
    }
   }, [id])

   useEffect(() => {
    if (id) {
      const fetchComment = async () => {
        const data = await fetchReviewComment(id)
        setReviewComment(data)
      }
    fetchComment()
    }
   }, [id, modalOpen])

  const handeleCommentDelete = async (id: string) => {
    await deleteReviewComment(id)
    setReviewComment(undefined)
  }

  const onCommentSubmit = async (data: CommentFormDataTypes) => {
    const formattedData = {...{...data, review_id: id}}
    await postReviewComment(formattedData)
    setReviewComment(formattedData)
    handleModal()
  }

  const handeleCommentSubmit = () => {
    handleModal()
  }

  const handeleCommentUpdate = () => {
    handleModal()
  }

  const onUpdateComment = async (data: CommentFormDataTypes) => {
    if(reviewComment) {
      await updateReviewComment({...{...data, review_id: id, id: reviewComment.id}})
      setReviewComment(data)
      handleModal()
    }
  }

  

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <>
      <LinkWrapper to={`/`}>
        <ArrowBackIosIcon sx={{ fontSize: 16, color: 'white'}} />
      </LinkWrapper>
      <ReviewCardDetailContainer>
        <Typography variant={'h6'} sx={{ fontSize: 16, fontWeight: 600 }} color="text.primary">
          {reviewDetail?.place}
        </Typography>
        <StarRating {...{ rating: reviewDetail?.rating || 0 }} />
        <UserReviewContent sx={{ fontSize: 13}} color="text.secondary">
          {reviewDetail?.content}
        </UserReviewContent>
        <AuthorDateContainer>
          <Typography sx={{ fontSize: 10, textAlign: 'left', marginRight: '40px' }} color="text.primary">{reviewDetail?.author}</Typography>
          <Typography sx={{ fontSize: 10, textAlign: 'right', color: grey[500] }}>{day(reviewDetail?.published_at).format('DD/MM/YYYY')}</Typography>
        </AuthorDateContainer>
        {!reviewComment && <AddCommentButton color="primary" aria-label="Add Comment" onClick={handeleCommentSubmit}>
          <InsertCommentIcon sx={{ fontSize: 16, color: grey[800]}}/>
        </AddCommentButton>}
      </ReviewCardDetailContainer>
     {reviewComment && <CommentCard {...{...reviewComment, handeleCommentDelete, handeleCommentUpdate }}/>}
      {id && <ContentModal {...{ handleModal, modalOpen, onCommentSubmit, onUpdateComment, reviewComment }}/>}
    </>
  )
}

export default ReviewDetails

const ReviewCardDetailContainer = styled(Card)`
  border: 1px; 
  display: flex;
  min-height: 160px;
  margin: 32px 48px;
  padding: 13px 80px;
  position: relative;
  flex-direction: column;
`
const AddCommentButton = styled(IconButton)`
  position: absolute !important;
  right: 80px;
  bottom: 0px;
`
const LinkWrapper = styled(Link)`
  position: absolute;
  top: 26px;
  left: 20px;
  text-decoration: none;
`