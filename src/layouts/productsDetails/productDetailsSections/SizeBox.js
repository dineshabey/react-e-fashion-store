import { Box, Typography } from '@mui/material'
import React from 'react'

export default function SizeBox({ size }) {
    return (
        <Box sx={{
            p: 1,
            border: '2px solid green',
            borderRadius: '10px',
            width:'40px',
            textAlign:'center',
            backgroundColor:"#afd7af"

        }}>
            <Typography>
                {size}
            </Typography>
        </Box>
    )
}
