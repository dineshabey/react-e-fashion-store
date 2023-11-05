import React from 'react';
import ReactImageMagnify from 'react-image-magnify';

export default function SingaleproductionImage({ watchImg300, watchImg1200 }) {
    return (
        <ReactImageMagnify
            imageStyle={{ borderRadius: '10px' }}
            enlargedImageContainerStyle={{ borderRadius: '10px' }}
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
