import React from 'react';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';

export default function SingaleproductionImage({ watchImg300, watchImg1200 }) {
    return (
        <InnerImageZoom src={watchImg300} zoomSrc={watchImg1200} />

    )
}
