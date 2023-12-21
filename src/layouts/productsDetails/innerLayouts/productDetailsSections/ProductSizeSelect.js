import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SizeBox from './SizeBox';

export default function ProductSizeSelect({ handleSizeSelect, sizes }) {
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
            <FormControlLabel
              onChange={() => handleSizeSelect(val)}
              value={val}
              key={key}
              control={<Radio />
              } label={<SizeBox size={val} />} />
          );
        })}

      </RadioGroup>
    </FormControl>
  );
}
