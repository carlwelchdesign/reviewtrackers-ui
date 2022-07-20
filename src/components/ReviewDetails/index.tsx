import React, { useState, useEffect } from 'react'
import { CommentFormDataTypes, ReviewDataType } from '../common/types/ReviewDataTypes'
import { deleteReviewComment, fetchOneReview, fetchReviewComment, postReviewComment, updateReviewComment } from '../common/api'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import ContentModal from '../common/CommentModal'
import CommentCard from '../common/CommentCard'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DetailCard from '../common/DetailCard'

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
      {reviewDetail && <DetailCard {...{reviewDetail, showCommentButton: !reviewComment, handleModal}}/>}
      {reviewComment && <CommentCard {...{...reviewComment, handeleCommentDelete, handleModal }}/>}
      {id && <ContentModal {...{ handleModal, modalOpen, onCommentSubmit, onUpdateComment, reviewComment }}/>}
    </>
  )
}

export default ReviewDetails


const LinkWrapper = styled(Link)`
  position: absolute;
  top: 26px;
  left: 20px;
  text-decoration: none;
`