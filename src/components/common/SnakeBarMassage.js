import * as React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp({ message }) {
    const { enqueueSnackbar } = useSnackbar();

    React.useEffect(() => {
        handleClickVariant('success')();
    }, [message])

    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar(message, { variant });
    };


    return (
        <React.Fragment>
            {<Button onClick={handleClickVariant('success')}>Show success snackbar</Button>}
            <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
        </React.Fragment>
    );
}

export default function SnakeBarMassage({ message }) {
    return (
        <SnackbarProvider maxSnack={3}>
            <MyApp message={message} />
        </SnackbarProvider>
    );
}

