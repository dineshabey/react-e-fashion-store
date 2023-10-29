import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SingaleSizeBox from './productSize/SingaleSizeBox';

const defaultSize = ['xs', 's', 'm', 'l', 'xl'];

export default function ProductSize({ isAvailabelSize }) {
  const [finalSizeList, setFinalSizeList] = useState([]);

  useEffect(() => {

    let temArray = [];

    if (isAvailabelSize) {
      defaultSize.forEach(element => {
        temArray.push({
          size: element,
          isAvailabel: isAvailabelSize.includes(element),
        })
      });
    }
    setFinalSizeList(temArray);
  }, [isAvailabelSize])
  

  return (
    <Grid container spacing={1}>
      <Grid item xs={1}></Grid>
      {finalSizeList.map((val, key) => {
        return <Grid item key={key} xs={2} >
          <SingaleSizeBox size={val.size} isAvailabel={val.isAvailabel} />
        </Grid>
      })}
      <Grid item xs={1}></Grid>
    </Grid>
  )
}
