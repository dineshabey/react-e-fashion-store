import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

export default function SingaleproductionImage({ watchImg300, watchImg1200 }) {
    return (
        <ReactImageMagnify
            imageStyle={{ borderRadius: '20px 0 0 20px' }}
            enlargedImageContainerStyle={{ borderRadius: '20px 0 0 20px' }}
            enlargedImagePosition='over'
            {...{
                smallImage: {
                    alt: 'Wristwatch by Ted Baker London',
                    // isFluidWidth: true,
                    src: watchImg300,
                    height: 450,
                    width: 450,
                },
                largeImage: {
                    src: watchImg1200,
                    width: 700,
                    height: 1600
                },
            }} />
    )
}
