import React from 'react';
import { Grid, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material'

const QtyButtons = [
  {
    type: 'add',
    icon: <AddIcon />,
  },
  {
    type: 'remove',
    icon: <RemoveIcon />,
  },
];

export default function QtySelectSection({qty, handleQtyChange}) {

  // const [qty, setQty] = useState(1);

  const handleOnclick = (type) => {
    if ('add' === type && qty + 1 < 11) {
      handleQtyChange(qty + 1);
    } else if ('remove' === type && qty - 1 > 0) {
      handleQtyChange(qty - 1);
    }
  }


  return (
    <Grid container justifyContent={'flex-start'}>
      <Grid item >
        <Typography sx={{ fontSize: '40px', borderBottom: '1px solid blac' }}>
          {qty < 10 ? `0${qty}` : qty}
        </Typography>
      </Grid>
      {QtyButtons.map((val, key) => {
        return (
          <Grid item key={key} sx={{ ml: 2, mt: 1 }}>
            <IconButton
              sx={{
                border: '1px solid gray',
                borderRadius: '10px',

              }}

              onClick={() => handleOnclick(val.type)}

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
