import React, { useEffect } from 'react'
import { Box, Modal, Typography, TextField, Button } from '@mui/material'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { CommentFormDataTypes } from '../../../constants/types/ReviewDataTypes'

type Props = {
  handleModal: () => void
  modalOpen: boolean
  onCommentSubmit: (data: CommentFormDataTypes) => Promise<void>
  onUpdateComment: (data: CommentFormDataTypes) => Promise<void>
  reviewComment: CommentFormDataTypes | undefined
}

const ContentModal = ({handleModal, modalOpen, onCommentSubmit, onUpdateComment, reviewComment }: Props) => {
  const { handleSubmit, reset, register } = useForm()
  
  useEffect(() => {
    reset({author: reviewComment?.author || '', comment: reviewComment?.comment || ''})
  }, [reset, reviewComment])


  const onSubmit = (data: CommentFormDataTypes) => {
    !!reviewComment ? onUpdateComment(data) : onCommentSubmit(data)
  }

  return (
    <Modal data-testid="comment-modal"
      open={modalOpen}
      onClose={handleModal}>
      <ModalContentContainer>
        <Typography id="modal-modal-title" variant="h6" sx={{ fontWeight: 800 }}>
          Add a comment
        </Typography>     
        <form onSubmit={handleSubmit(onSubmit)}>  
          <CommentTextField
            label="Enter your name"
            required
            {...register("author")}
          />
          <CommentTextField
            label="Leave a comment"
            required
            multiline
            rows={4}
            {...register("comment")}
          />
          <ButtonContainer>
            <CommentButton variant="contained" type="submit">Submit</CommentButton>
            <CommentButton variant="outlined" onClick={handleModal}>Cancel</CommentButton>
          </ButtonContainer>
        </form>
      </ModalContentContainer>
    </Modal>
  )
}

export default ContentModal

const ModalContentContainer = styled(Box)`
  width: 60%;
  min-height: 324px;
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