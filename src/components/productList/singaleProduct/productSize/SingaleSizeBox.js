import React from 'react';
import { Typography } from '@mui/material'

export default function SingaleSizeBox({ size, isAvailabel }) {
    return (
        <div style={{
            border: '2px solid teal',
            borderRadius: '7px',
            backgroundColor: isAvailabel ? 'black' : 'white',
            color: isAvailabel ? 'white' : 'gray',
        }}>
            <Typography >
                {size}
            </Typography>
        </div>
    )
}
