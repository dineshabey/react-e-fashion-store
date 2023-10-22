import React, { useState } from 'react';


export default function ProductImage({images}) {
  const [ImageSrc, SetimageSrc] = useState(images[0]);
  return (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <img alt='productImage' src={ImageSrc}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '5px',
          objectFit: 'contain',
        }}
        onMouseOver={() => {
          SetimageSrc(images[1])
        }}
        onMouseOut={() => {
          SetimageSrc(images[0])

        }}
      ></img>

    </div>
  )
}
