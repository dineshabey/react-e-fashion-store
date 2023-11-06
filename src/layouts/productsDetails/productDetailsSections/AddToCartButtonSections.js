import React from 'react';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ShoppingCart as CartIcon } from '@mui/icons-material';
import SnakeBarMassage from '../../../components/common/SnakeBarMassage';

export default function AddToCartButtonSections() {
    return (

        <div style={{textAlign:'right'}}>
            <Button
                startIcon={<CartIcon />}
                variant='contained'
                sx={{
                    backgroundColor: 'teal',
                    borderRadius: '20px',
                    padding: '8px 70px',
                    '&:hover': {
                        bgcolor: 'green'
                    },
                }}

            >
                Add To Cart
            </Button>

            <SnakeBarMassage message={'Product added !'}/>
        </div>


    )
}
