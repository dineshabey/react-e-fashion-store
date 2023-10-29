import React from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function FooterLayouts() {
    return (
        <Box sx={{
            backgroundColor: 'teal',
            display: 'flex',
            justifyContent: 'space-between',
            p: '2px',
            position:'fixed',
            width:'100%',
            bottom:'0',
        }}>
            <div>
                <small>&copy; Copyright {new Date().getFullYear()}</small>
            </div>
            <div style={{ justifyItems: 'center' }}>
                <span>Created by_</span>
                <a style={{ color: 'white', justifyItems: 'center' }} href='https://github.com/dineshabey'>Dinesh</a>

            </div>

            <div>
                <Button variant="contained"
                    sx={{
                        bgcolor: 'white',
                        color: 'teal',
                        borderRadius: '20px',
                        fontSize: '10px',
                        fontWeight: 'bold',
                        ml: '10px',
                        "&:hover": {
                            bgcolor: 'gray',
                        }
                    }}
                >Contained</Button>
            </div>

        </Box>
    )
}
