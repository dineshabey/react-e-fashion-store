import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const imageWidth = '20%';

const images = [
    {
        url: 'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/redDoubleLayerDress/10601623694_11b5d26601_c.jpg',
        title: 'All Items',
        width: imageWidth,
      
    },
    {
        url: 'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/goldMiniDress/6255706577_29e1dd8095_c.jpg',
        title: 'New Items',
        width: imageWidth,
    },
    {
        url: 'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/redDoubleLayerDress/10601623694_11b5d26601_c.jpg',
        title: 'Trending Items',
        width: imageWidth,
    },
    {
        url: 'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/goldMiniDress/6255706577_29e1dd8095_c.jpg',
        title: 'Top Items',
        width: imageWidth,
    },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));



export default function ButtonListLayouts() {
    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            minWidth: 300,
            width: '100%',
            justifyContent: 'center',
            // paddingBottom:'20px',

        }}>

            {images.map((image) => (
                <ImageButton
                    focusRipple
                    key={image.title}
                    style={{
                        width: image.width,
                        margin: '2%',
                    }}
                >
                    <ImageSrc style={{ backgroundImage: `url(${image.url})`, borderRadius: '20px' }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" style={{ borderRadius: '20px' }} />
                    <Image>
                        <Typography
                            component="span"
                            variant="subtitle1"
                            color="inherit"
                            style={{ borderRadius: '120px' }}
                            sx={{
                                position: 'relative',
                                p: 4,
                                pt: 2,
                                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                            }}
                        >
                            {image.title}
                            <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>
            ))}
        </Box>
    );
}
