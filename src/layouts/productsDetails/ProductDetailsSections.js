import { Grid, Typography } from '@mui/material';
import React from 'react';
import RatingComponets from './RatingComponets';
import StockStatusChip from './StockStatusChip';
import PriceComponets from '../../components/productDetails/PriceComponets';
import ProductNameDetails from '../../components/productDetails/ProductNameDetails';
import QtyAndPriceSections from './productDetailsSections/QtyAndPriceSections';
import ProductSizeSelect from './productDetailsSections/ProductSizeSelect';
import AddToCartButtonSections from './productDetailsSections/AddToCartButtonSections';

export default function ProductDetailsSections({
  productName,
  productType,
  price,
  size
}) {
  return (
    <Grid container justifyContent={'flex-start'}>
      <Grid container justifyContent={'space-between'}>
        <Grid item>
          <ProductNameDetails name={`${productName} ${productType}`} />
        </Grid>
        <Grid item>
          <StockStatusChip />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <RatingComponets />
      </Grid>
      <Grid item xs={12}>
        <PriceComponets value={price} />
        <Typography>
          This is the sample product description.
        </Typography>
        <Typography xs={12} sx={{ pt: 2 }}>
          <ProductSizeSelect sizes={size} />
        </Typography>
        <hr />
        <Typography>
          <QtyAndPriceSections price={price} />
        </Typography>
        <Grid justifyContent={'flex-end'}>
          <Grid item style={{aling:'right'}}>
            <AddToCartButtonSections />
          </Grid>
        </Grid>
        <hr />
        <p>Note: Product colour may slightly vary due to photographic lighting sources or your monitor settings.</p>
      </Grid>
    </Grid>

  )
}
