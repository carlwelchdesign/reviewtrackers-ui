import React from 'react'
import StarRateIcon from '@mui/icons-material/StarRate';
import { yellow } from '@mui/material/colors';

type Props = {
	rating: number
}

const StarRating = ({rating}: Props) => {
	return (
		<>
			{[...Array(rating)].map((star: any, index: number) =>        
				<StarRateIcon key={index} sx={{ color: yellow[600] }} />
			)}
		</>
	)
}

export default StarRating