import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import { yellow, grey } from '@mui/material/colors';

type Props = {
	rating: number
}

const starAmount = 5

const StarRating = ({rating}: Props) => {
	return (
		<>
			{[...Array(starAmount)].map((star: any, index: number) =>        
				<StarRateIcon key={index} sx={{ fontSize: 'medium', color: rating >= index ? yellow[700] : grey[300]}} />
			)}
		</>
	)
}

export default StarRating