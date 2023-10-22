import React, { useState } from 'react';

const images = [
  'https://radikadilanka.com/rdfashion/static/media/product18.8cbfe59a.jpg',
  'https://radikadilanka.com/rdfashion/static/media/product118.8609b05b.jpg'
]

export default function ProductImage() {
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
