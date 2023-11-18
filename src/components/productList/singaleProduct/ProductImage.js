import React, { useState } from 'react';



const images = [
  'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/blueDoubleLayerDress/10601626126_0a0662171b_c.jpg',
  'https://cdn.radikadilanka.com/radikadilanka.com.assets/fashionImages/officeBlackJacket/alireza-esmaeeli-jnGOm2WBLJs-unsplash-min.jpg',
  
];

export default function ProductImage() {

  // console.log(images[0])
  // const [imageSrc, setImageSrc] = useState(images && images.length > 0 ? images[0][0] : '');
  const [imageSrc, setImageSrc] = useState(images && images.length > 0 ? images[0] : '');
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <img alt='productImage' src={imageSrc}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '5px',
          objectFit: 'contain',
        }}
        onMouseOver={() => {
          setImageSrc(images && images.length > 0 ? images[1] : '')
          // setImageSrc(images && images.length > 0 ? images[0][1] : '')
        }}
        onMouseOut={() => {
          setImageSrc(images && images.length > 0 ? images[0] : '')
          // setImageSrc(images && images.length > 0 ? images[0][0] : '')

        }}
      ></img>

    </div>
  )
}
