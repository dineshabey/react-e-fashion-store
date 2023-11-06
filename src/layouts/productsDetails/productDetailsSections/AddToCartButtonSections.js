import React from 'react';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ShoppingCart as CartIcon } from '@mui/icons-material';

export default function AddToCartButtonSections() {
    return (

        <div>
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
        </div>


    )
}
