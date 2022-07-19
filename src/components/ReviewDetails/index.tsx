import React, { useState, useEffect } from 'react'
import { Box, Card, IconButton, Modal, Typography, TextField, Button } from '@mui/material'
import { CommentFormDataTypes, ReviewDataType } from '../common/types/ReviewDataTypes'
import StarRating from '../common/StarRating'
import day from 'dayjs'
import { fetchOneReview, fetchReviewComment, postReviewComment } from '../common/api'
import { useParams } from 'react-router-dom'
import grey from '@mui/material/colors/grey'
import styled from 'styled-components'
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { useForm } from 'react-hook-form'

const ReviewDetails = () => {
  const { id } = useParams()
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: CommentFormDataTypes) => {
    postReviewComment({...{...data, review_id: id}})
    handleModal()
  }

  const [reviewDetail, setReviewDetail] = useState<ReviewDataType>()
  const [reviewComment, setReviewComment] = useState<CommentFormDataTypes>()
  const [openModal, setOpenModal] = useState<boolean>(false)

  useEffect(() => {
    if (id) {
      const fetchReview = async () => {
        const data = await fetchOneReview(id)
        setReviewDetail(data)
        // setLoading(false)
      }
    fetchReview()
    }
   }, [id])

   useEffect(() => {
    if (id) {
      const fetchComment = async () => {
        const data = await fetchReviewComment(id)
        setReviewComment(data)
        console.log(data)
        // setLoading(false)
      }
    fetchComment()
    }
   }, [id])

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
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
        <AddCommentButton color="primary" aria-label="Add Comment" onClick={handleModal}>
          <InsertCommentIcon sx={{ fontSize: 16, color: grey[800]}}/>
        </AddCommentButton>
      </ReviewCardDetailContainer>
     {reviewComment && ( <CommentCardContainer>
        <UserReviewContent sx={{ fontSize: 13}} color="text.secondary">
          {reviewComment?.comment}
        </UserReviewContent>
        <AuthorDateContainer>
          <Typography sx={{ fontSize: 10, textAlign: 'left', marginRight: '40px' }} color="text.primary">{reviewComment?.author}</Typography>
          <Typography sx={{ fontSize: 10, textAlign: 'right', color: grey[500] }}>{day(reviewComment?.updatedAt).format('DD/MM/YYYY')}</Typography>
        </AuthorDateContainer>
      </CommentCardContainer>)}
      <Modal
        open={openModal}
        onClose={handleModal}>
        <ModalContentContainer>
          <Typography id="modal-modal-title" variant="h6" sx={{ fontWeight: 800 }}>
            Add a comment
          </Typography>     
          <form onSubmit={handleSubmit(onSubmit)}>                                       
            <CommentTextField
              label="Enter your name"
              {...register("author")} 
            />
            <CommentTextField
              label="Leave a comment"
              {...register("comment")} 
              multiline
              rows={4}
            />
            <ButtonContainer>
              <CommentButton variant="contained" type="submit">Submit</CommentButton>
              <CommentButton variant="outlined" onClick={handleModal}>Cancel</CommentButton>
            </ButtonContainer>
          </form>
        </ModalContentContainer>
      </Modal>
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
const CommentCardContainer = styled(Card)`
  border: 1px; 
  display: flex;
  min-height: 80px;
  margin: 32px 48px;
  padding: 13px 80px;
  position: relative;
  flex-direction: column;
`
export const UserReviewContent = styled(Typography)`
  padding: 7px 0 30px; 
`
const AuthorDateContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: inherit;
  margin-bottom: auto;
  position: absolute !important;
  left: 80px;
  bottom: 12px;
`
const AddCommentButton = styled(IconButton)`
  position: absolute !important;
  right: 80px;
  bottom: 0px;
`
const ModalContentContainer = styled(Box)`
  width: 60%;
  height: 324px;
  margin: 20% auto;
  background-color: white;
  vertical-align: center;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
`
const CommentTextField = styled(TextField)`
  width: 100% !important;
  margin-top: 24px !important;
  align-self: 
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 24px;
`
const CommentButton = styled(Button)`
  margin-left: 10px !important;
`