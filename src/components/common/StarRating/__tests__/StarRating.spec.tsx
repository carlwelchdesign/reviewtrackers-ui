import React from 'react'
import { render, screen } from '@testing-library/react'
import StarRating from '../index'

describe('StarRating', () => {
    it('Display Rating Stars', async () => {
        render(<StarRating {...{ rating: 5 }} />)
        const stars = screen.queryAllByTestId('StarRateIcon')
        expect(stars.length).toBe(5)
    })
})