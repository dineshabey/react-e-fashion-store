import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function StockStatusChip({ qty }) {
    return (
        <div>
            <Chip
                label={qty > 0 ? 'In-stock : ' + qty : 'Out-of-stock'}
                color={qty > 0 ? 'success' : 'error'} />
        </div>

    );
}
