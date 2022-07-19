import { Card, Typography } from "@mui/material"
import styled from "styled-components"

export const CardContainer = styled(Card)`
  border: 1px; 
  width: 192px;
  display: inline-flex;
  max-width: 192px;
  height: 160px;
  margin: 32px 48px;
  padding: 13px;
`
export const UserReviewListContent = styled(Typography)`
  padding-top: 7px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`
export const AuthorAndDateSubCantainer = styled.div`
  width: 100%;
  display: inline-flex;
  position: absolute;
  bottom: 0;
`
export const AuthorDateContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: inherit;
  margin-bottom: auto;
  position: absolute !important;
  left: 80px;
  bottom: 12px;
`
export const UserReviewContent = styled(Typography)`
  padding: 7px 0 30px; 
`