import React, { useState, useEffect, Suspense } from 'react'
import { CommentFormDataTypes, ReviewDataType } from '../common/types/ReviewDataTypes'
import { deleteReviewComment, fetchOneReview, fetchReviewComment, postReviewComment, updateReviewComment } from '../common/api'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import ContentModal from '../common/CommentModal'
import CommentCard from '../common/CommentCard'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DetailCard from '../common/DetailCard'
import CircularProgress from '@mui/material/CircularProgress';

const ReviewDetails = () => {
  const { id } = useParams()
  const [reviewDetail, setReviewDetail] = useState<ReviewDataType | undefined>()
  const [reviewComment, setReviewComment] = useState<CommentFormDataTypes | undefined>()
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  useEffect(() => {
    if (id) {
      const fetchReview = async () => {
        try {
          const data = await fetchOneReview(id)
          setReviewDetail(data)
        } catch (err) {
          console.log('error', err);
        }
      }
    fetchReview()
    }
   }, [id])

   useEffect(() => {
    if (id) {
      const fetchComment = async () => {
        try {
          const data = await fetchReviewComment(id)
          setReviewComment(data)
        } catch (err) {
          console.log('error', err);
        }
      }
    fetchComment()
    }
   }, [id, modalOpen])

  const handeleCommentDelete = async (id: string) => {
    const reviewId = reviewDetail?.id
    if (reviewId) await deleteReviewComment(id, reviewId)
    setReviewComment(undefined)
  }

  const onCommentSubmit = async (data: CommentFormDataTypes) => {
    const formattedData = {...{...data, review_id: id}}
    try {
      await postReviewComment(formattedData)
      setReviewComment(formattedData)
      handleModal()
    } catch (err) {
      console.log('error', err);
    }
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
      <Suspense fallback={<CircularProgress />}>
        {reviewDetail && <DetailCard
          reviewDetail={reviewDetail}
          showCommentButton={!reviewComment}
          handleModal={handleModal}
        />}
        {reviewComment && <CommentCard {...{...reviewComment, handeleCommentDelete, handleModal }}/>}
        <ContentModal 
          handleModal={handleModal}
          modalOpen={modalOpen}
          onCommentSubmit={onCommentSubmit}
          onUpdateComment={onUpdateComment}
          reviewComment={reviewComment}
        />
      </Suspense>
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