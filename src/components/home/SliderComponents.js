import { Button } from '@mui/material'
import React from 'react'

export default function SliderComponents({ image, isButtonVisibale }) {
    return (
        <div style={{ position: 'relative' }}>
            {isButtonVisibale &&
                <div style={{ position: 'absolute', width: '100%', height: '80vh', display: 'flex' }}>
                    <div style={{ margin: '0 auto', marginTop: '20%' }}>

                        <Button
                            style={{
                                color: 'white',
                                borderRadius: '30px',
                                border: '1px solid white',
                                fontSize: '20px',
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
                    </div>
                </div>
            }
            <img src={image} alt='sliderImage' width='100%'></img>
        </div>

    )
}
