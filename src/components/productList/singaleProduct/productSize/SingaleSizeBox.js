import React from 'react';
import {Typography } from '@mui/material'

export default function SingaleSizeBox({size}) {
    return (
        <div style={{
            border: '2px solid teal',
            borderRadius: '7px',
            backgroundColor: 'black',
            color: 'white',
        }}>
            <Typography >
                {size}
            </Typography>
        </div>
    )
}
