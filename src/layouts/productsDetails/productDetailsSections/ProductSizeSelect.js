import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ProductSizeSelect({ sizes }) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Product Sizes</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {sizes.map((val, key) => {
          return (
            <FormControlLabel value={val} key={key} control={<Radio />} label={val} />
          );
        })}

      </RadioGroup>
    </FormControl>
  );
}
