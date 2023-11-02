import { Grid } from '@mui/material';
import React from 'react';
import RatingComponets from './RatingComponets';
import StockStatusChip from './StockStatusChip';
import PriceComponets from '../../components/productDetails/PriceComponets';
import ProductName from '../../components/productDetails/ProductName';

export default function ProductDetailsSections() {
  return (
    <Grid container justifyContent={'flex-start'}>
      <Grid container justifyContent={'space-between'}>
        <Grid item>
          <ProductName name={'Product 01'}/>
        </Grid>
        <Grid item>
          <StockStatusChip />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <RatingComponets />
      </Grid>
      <Grid item xs={12}>
        LKR 4500.00
        <PriceComponets value={4500} />
        <p>
          This is the sample product description.
        </p>
        <p>STYLE SIZE</p>
        <hr />
        <p>Qty selector and price display</p>
        <p>Add to card Button</p>
        <hr />
        <p>Note: Product colour may slightly vary due to photographic lighting sources or your monitor settings.</p>
      </Grid>
    </Grid>

  )
}
