import React from 'react';
import Button from '@mui/material/Button';
import { ShoppingCart as CartIcon } from '@mui/icons-material';
import SnakeBarMassage from '../../../../components/common/SnakeBarMassage';

export default function AddToCartButtonSections({ handleClick }) {
    return (

        <div style={{ textAlign: 'right' }}>
            <Button
                onClick={handleClick}
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

            <SnakeBarMassage message={'Product added !'} />

        </div>


    )
}
