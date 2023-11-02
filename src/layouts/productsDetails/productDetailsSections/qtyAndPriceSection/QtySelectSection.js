import React from 'react'
import { Grid, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'

const QtyButtons = [
  {
    type: 'add',
    icon: <AddIcon />,
  },
  {
    type: 'add',
    icon: <RemoveIcon />,
  },
];

export default function QtySelectSection() {


  return (
    <Grid container justifyContent={'flex-start'}>
      <Grid item >
        <Typography sx={{ fontSize: '40px' ,borderBottom:'1px solid blac'}}>
          02
        </Typography>
      </Grid>
      {QtyButtons.map((val, key) => {
        return (
          <Grid item key={key} sx={{ ml: 2 ,mt:1}}>
            <IconButton
              sx={{
                border: '1px solid gray',
                borderRadius: '10px',

              }}
              aria-label="delete" size="large">
              {val.icon}
            </IconButton>
          </Grid>
        );
      })
      }
    </Grid>
  )
}
