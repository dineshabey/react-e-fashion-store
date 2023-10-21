import { Button } from '@mui/material'
import React from 'react'

export default function SliderComponents({ image }) {
    return (
        <div style={{}}>
            <Button
                style={{
                    color: 'white',
                    borderRadius: '20px',
                    border: '1px solid white',
                    fontSize: '30px',
                    padding: '5px 20px',
                }}
                sx={{
                    '&:hover': {
                        bgcolor: 'black',
                    },
                }}
                variyant='outlined'
            >
                Shop now</Button>
            <img src={image} alt='sliderImage' width='100%'></img>
        </div>

    )
}
