import React, { useState, useEffect } from 'react'
import { Box, Card, IconButton, Modal, Typography, TextField, Button } from '@mui/material'
import { ReviewDataType } from '../types/ReviewDataTypes'
import StarRating from '../StarRating'
import day from 'dayjs'
import { fetchOneReview } from '../api'
import { useParams } from 'react-router-dom'
import grey from '@mui/material/colors/grey'
import styled from 'styled-components'
import InsertCommentIcon from '@mui/icons-material/InsertComment';

const ReviewDetails = () => {
  const { id } = useParams()
  const [reviewDetail, setReviewDetail] = useState<ReviewDataType>()
  const [openModal, setOpenModal] = useState<boolean>(false)

  useEffect(() => {
    if (id) {
      const fetchAndSetReviews = async () => {
        const data = await fetchOneReview(id)
        setReviewDetail(data)
        // setLoading(false)
      }
    fetchAndSetReviews()
    }
   }, [id])

  const handleModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <>
      <CardContainer>
        <Typography variant={'h6'} sx={{ fontSize: 16, fontWeight: 600 }} color="text.primary">
          {reviewDetail?.place}
        </Typography>
        <StarRating {...{ rating: reviewDetail?.rating || 0 }} />
        <UserReviewContent sx={{ fontSize: 13}} color="text.secondary">
          {reviewDetail?.content}
        </UserReviewContent>
        <AuthorAndDateSubCantainer>
          <Typography sx={{ fontSize: 10, textAlign: 'left', marginRight: '40px' }} color="text.primary">{reviewDetail?.author}</Typography>
          <Typography sx={{ fontSize: 10, textAlign: 'right', color: grey[500] }}>{day(reviewDetail?.published_at).format('DD/MM/YYYY')}</Typography>
        </AuthorAndDateSubCantainer>
        <AddCommentButton color="primary" aria-label="Add Comment" onClick={handleModal}>
          <InsertCommentIcon sx={{ fontSize: 16, color: grey[800]}}/>
        </AddCommentButton>
      </CardContainer>
      <Modal
        open={openModal}
        onClose={handleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <ModalContentContainer>
          <Typography id="modal-modal-title" variant="h6" sx={{ fontWeight: 800 }}>
            Add a comment
          </Typography>                                                     
          <CommentTextField
            id="outlined-multiline-flexible"
            label="Enter your name"
            // value={'value'}
            // onChange={handleChange}
          />
          <CommentTextField
            id="outlined-multiline-static"
            label="Leave a comment"
            multiline
            rows={4}
          />
          <ButtonContainer>
          <CommentButton variant="outlined" onClick={handleModal}>Cancel</CommentButton>
          <CommentButton variant="contained">Submit</CommentButton>
          </ButtonContainer>
        </ModalContentContainer>
      </Modal>
      </>
  )
}

export default ReviewDetails

const CardContainer = styled(Card)`
  border: 1px; 
  display: inline-block;
  min-height: 160px;
  margin: 32px 48px;
  padding: 13px 80px;
  position: relative;
`
export const UserReviewContent = styled(Typography)`
  padding-top: 7px; 
`
const AuthorAndDateSubCantainer = styled.div`
  display: inline-flex;
  position: absolute;
  bottom: 13px;
  width: inherit;
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
  align-items: flex-end;
  margin-top: 24px;
  width: auto;
  align-self: flex-end;
`
const CommentButton = styled(Button)`
  margin-left: 10px !important;
`