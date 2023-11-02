import React from 'react'
import { Grid, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function QtySelectSection() {
  return (
    <Grid container justifyContent={'flex-start'}>
      <Grid item>
        <Typography sx={{fontSize:'40px'}}>
          02
        </Typography>
      </Grid>
      <Grid item>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Grid>
      <Grid item>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </Grid>
    </Grid>
  )
}
