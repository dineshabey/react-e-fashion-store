import React, { useState } from 'react';


export default function ProductImage({ images }) {
  const [imageSrc, setImageSrc] = useState(images && images.length > 0 ? images[0][0] : '');
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
          setImageSrc(images && images.length > 0 ? images[0][1] : '')
        }}
        onMouseOut={() => {
          setImageSrc(images && images.length > 0 ? images[0][0] : '')

        }}
      ></img>

    </div>
  )
}
