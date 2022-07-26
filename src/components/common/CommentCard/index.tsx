import React from 'react'
import { CommentFormDataTypes } from '../../../constants/types/ReviewDataTypes'
import { Card, Typography, Fade } from '@mui/material'
import styled from 'styled-components'
import day from 'dayjs'
import CommentMenu from '../CommentMenu'
import ReplyIcon from '@mui/icons-material/Reply'
import { blue, grey } from '@mui/material/colors'

interface Props {
  handeleCommentDelete: any
  handleModal: () => void
}

type CardProps = CommentFormDataTypes & Props

const CommentCard = ({ comment, author, updatedAt, id, handeleCommentDelete, handleModal }: CardProps) => {

  const handleCommentMenu = (selection: string) => {
    if (id) {
      switch (selection) {
        case 'Delete':
          handeleCommentDelete(id)
          break
        case 'Update':
          handleModal()
          break
      }
    }
  }

  return (
    <Fade in={true}
      style={{ transformOrigin: '0 0 0' }}
      {...{ timeout: 1000 }}
    >
      <CommentCardContainer>
        <ReplyIconStyled sx={{ fontSize: 16, color: blue[800] }} />
        <CommentMenu {...{ handleCommentMenu }} />
        <UserReviewContent sx={{ fontSize: 13 }} color="text.secondary">
          {comment}
        </UserReviewContent>
        <AuthorDateContainer>
          <AuthorText sx={{ fontSize: 10, textAlign: 'left', marginRight: '40px' }} color="text.primary">{author}</AuthorText>
          <Typography sx={{ fontSize: 10, textAlign: 'right', color: grey[500] }}>{day(updatedAt).format('DD/MM/YYYY')}</Typography>
        </AuthorDateContainer>
      </CommentCardContainer>
    </Fade>
  )
}

export default CommentCard

const CommentCardContainer = styled(Card)`
  border: 1px; 
  display: flex;
  min-height: 80px;
  padding: 13px 80px;
  position: relative;
  flex-direction: column;
`
export const AuthorText = styled(Typography)`
  font-size: 10px; 
  text-align: 'left', 
  margin-right: '40px'
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
const ReplyIconStyled = styled(ReplyIcon)`
  position: absolute !important;
  left: 32px;
  top: 22px;
`