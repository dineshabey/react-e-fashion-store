import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import RatingComponets from './RatingComponets';
import StockStatusChip from './StockStatusChip';
import PriceComponets from '../../../components/productDetails/PriceComponets';
import ProductNameDetails from '../../../components/productDetails/ProductNameDetails';
import QtyAndPriceSections from './productDetailsSections/QtyAndPriceSections';
import ProductSizeSelect from './productDetailsSections/ProductSizeSelect';
import AddToCartButtonSections from './productDetailsSections/AddToCartButtonSections';

export default function ProductDetailsSections({
  productName,
  productType,
  price,
  size,
  productDescription,
  availableQty
}) {
  return (
    <Grid container justifyContent={'flex-start'}>
      <Grid xs={12} item container justifyContent={'space-between'}>
        <Grid item>
          <ProductNameDetails name={`${productName} ${productType}`} />
        </Grid>
        <Grid item>
          <StockStatusChip qty={availableQty} />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <RatingComponets />
        <PriceComponets value={price} />
        <Typography>
          {productDescription}
        </Typography>
        <Box sx={{ pt: 2 }}>
          <ProductSizeSelect sizes={size} />
        </Box>
        <hr />
        <QtyAndPriceSections price={price} />
        <Grid container justifyContent={'end'} sx={{ pt: 3 }}>
          <Grid item style={{ aling: 'right' }}>
            <AddToCartButtonSections />
          </Grid>
        </Grid>
        <hr />
        <p>Note: Product colour may slightly vary due to photographic lighting sources or your monitor settings.</p>
      </Grid>
    </Grid>

  )
}
