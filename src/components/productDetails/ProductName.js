import { Typography } from '@mui/material'
import React from 'react'

export default function ProductName({ name }) {
    return (
        <Typography
            sx={{
                fontWeight: '550',
                fontSize: '30px',
                color:'teal'
            }}>
            {name}
        </Typography>
    )
}
