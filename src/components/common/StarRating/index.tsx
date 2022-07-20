import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import { yellow, grey } from '@mui/material/colors';
import styled from 'styled-components';

type Props = {
	rating: number
}

const starAmount = 5

const StarRating = ({rating}: Props) => {
	return (
		<StarContainer>
			{[...Array(starAmount)].map((_star: any, index: number) =>        
				<StarRateIcon key={index} sx={{ fontSize: 'medium', color: rating >= index ? yellow[700] : grey[300]}} />
			)}
		</StarContainer>
	)
}

export default StarRating

const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
`