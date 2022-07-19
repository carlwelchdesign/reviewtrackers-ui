import React from 'react'
import { Box, Modal, Typography, TextField, Button } from '@mui/material'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { CommentFormDataTypes } from '../types/ReviewDataTypes'
import { postReviewComment } from '../api'

type Props = {
  handleModal: any
  modalOpen: boolean
  id: string
}

const ContentModal = ({handleModal, modalOpen, id }: Props) => {
  const { register, handleSubmit, reset } = useForm({defaultValues: {author: '', comment: ''}})
  const onSubmit = async (data: CommentFormDataTypes) => {
    await postReviewComment({...{...data, review_id: id}})
    reset({author: '', comment: ''})
    handleModal()
  }

  return (
    <Modal
      open={modalOpen}
      onClose={handleModal}>
      <ModalContentContainer>
        <Typography id="modal-modal-title" variant="h6" sx={{ fontWeight: 800 }}>
          Add a comment
        </Typography>     
        <form onSubmit={handleSubmit(onSubmit)}>                                       
          <CommentTextField
            label="Enter your name"
            {...register('author')} 
          />
          <CommentTextField
            label="Leave a comment"
            {...register('comment')} 
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
  )
}

export default ContentModal

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